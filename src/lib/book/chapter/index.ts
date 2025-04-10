import { Optional } from "$lib/common";
import { Ordinal } from "$book/utils";
import { type ExpositionComponent, Prose, Statement } from "$book/exposition";
import { Title, ChapterTitle, BookTitle } from "$book/title";




export class Exposition {
    public readonly components: ExpositionComponent[];

    constructor(components: ExpositionComponent[]) {
        this.components = components;
    }
}

export class Subchapters {
    public readonly introduction: ExpositionComponent[];
    public readonly subchapters: BookChapter[];

    constructor(
        introduction: ExpositionComponent[], 
        subchapters: BookChapter[]
    ) {
        this.introduction = introduction;
        this.subchapters = subchapters;
    }
}


export class BookChapter {
    public readonly layout: Exposition | Subchapters;
    public readonly title: Title;
    private _nesting_depth: Optional<number> = Optional.none();



    constructor({
        title,
        layout
    }: {
        title: Title,
        layout: Exposition | Subchapters
    }) {
        this.title = title;
        this.layout = layout;
    }



    public get nesting_depth(): number {
        return this._nesting_depth.is_set() ? this._nesting_depth.value : 0;
    }



    public static from_exposition(
        components: ExpositionComponent[], 
        title: string | Prose
    ): BookChapter {
        return new BookChapter({
            title: new ChapterTitle(title),
            layout: new Exposition(components)
        });
    }

    public static book_from_exposition(
        components: ExpositionComponent[],
        title: string | Prose
    ): BookChapter {
        return new BookChapter({
            title: new BookTitle(title),
            layout: new Exposition(components)
        });
    }

    public static from_subchapters({
        introduction = [],
        subchapters,
        title
    }: {
        introduction?: ExpositionComponent[],
        subchapters: BookChapter[],
        title: string | Prose
    }): BookChapter {
        return new BookChapter({
            title: new ChapterTitle(title),
            layout: new Subchapters(introduction, subchapters)
        });
    }

    public static new_document({
        introduction = [],
        chapters,
        title
    }: {
        introduction?: ExpositionComponent[],
        chapters: BookChapter[],
        title: string | Prose
    }): BookChapter {
        const document = new BookChapter({
            title: new BookTitle(title),
            layout: new Subchapters(introduction, chapters)
        });

        document.assign_ordinals({});

        return document;
    }


    
    private assign_ordinals({
        prefixed_ordinal,
        zero_based_index = 0,
        nesting_depth = 0
    }: {
        prefixed_ordinal?: Ordinal,
        zero_based_index?: number,
        nesting_depth?: number
    }) {

        this._nesting_depth = Optional.set(nesting_depth);

        const ordinal = nesting_depth == 0 ? undefined
            : new Ordinal({
                prefixed_ordinal,
                zero_based_index
            });

        if (this.title instanceof ChapterTitle && ordinal) {
            this.title.set_ordinal(ordinal);
        }

        if (this.layout instanceof Subchapters) {
            this.layout.subchapters.forEach((chapter, index) => {
                chapter.assign_ordinals({
                    prefixed_ordinal: ordinal,
                    nesting_depth: nesting_depth + 1,
                    zero_based_index: index
                });
            });
        } else if (this.layout instanceof Exposition) {
            let statement_index = 0;
            this.layout.components.forEach((item) => {
                if (item instanceof Statement) {
                    item.set_ordinal(new Ordinal({
                        prefixed_ordinal: ordinal,
                        zero_based_index: statement_index
                    }));
                    statement_index += 1;
                }
            });
        }
    }
}