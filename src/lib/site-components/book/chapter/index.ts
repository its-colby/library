import { Optional } from "$common";
import { Ordinal } from "$book/utils";
import { type ExpositionComponent, Prose, Statement } from "$book/exposition";
import { Title, ChapterTitle, BookTitle } from "$book/title";


interface ChapterParams {
    title: string | Prose;
    is_book?: boolean;
}

export abstract class Chapter {
    public readonly title: Title;
    private _nesting_depth: Optional<number> = Optional.none();

    constructor(params: ChapterParams) {
        this.title = params.is_book ? new BookTitle(params.title) : new ChapterTitle(params.title);
    }

    public get nesting_depth(): number {
        return this._nesting_depth.is_set() ? this._nesting_depth.value : 0;
    }

    protected setup_ordinals({
        prefixed_ordinal,
        zero_based_index = 0,
        nesting_depth = 0
    }: {
        prefixed_ordinal?: Ordinal,
        zero_based_index?: number,
        nesting_depth?: number
    }): Ordinal | undefined {
        this.set_nesting_depth(nesting_depth);

        const ordinal = nesting_depth == 0 ? undefined
            : new Ordinal({
                prefixed_ordinal,
                zero_based_index
            });

        this.set_title_ordinal(ordinal);
        return ordinal;
    }

    public abstract assign_ordinals({
        prefixed_ordinal,
        zero_based_index,
        nesting_depth
    }: {
        prefixed_ordinal?: Ordinal,
        zero_based_index?: number,
        nesting_depth?: number
    }): void;

    protected set_nesting_depth(depth: number): void {
        this._nesting_depth = Optional.set(depth);
    }

    protected set_title_ordinal(ordinal?: Ordinal): void {
        if (this.title instanceof ChapterTitle && ordinal) {
            this.title.set_ordinal(ordinal);
        }
    }
}

interface BundledChaptersParams extends ChapterParams {
    introduction?: ExpositionComponent[];
    subchapters: Chapter[];
}

export class BundledChapters extends Chapter {
    public readonly introduction: Optional<ExpositionComponent[]>;
    public readonly subchapters: Chapter[];

    constructor(params: BundledChaptersParams) {
        super({
            title: params.title,
            is_book: params.is_book
        });
        this.introduction = params.introduction ? 
            Optional.set(params.introduction) : 
            Optional.none();
        this.subchapters = params.subchapters;
        if (params.is_book) {
            this.assign_ordinals({});
        }
    }

    public assign_ordinals({
        prefixed_ordinal,
        zero_based_index = 0,
        nesting_depth = 0
    }: {
        prefixed_ordinal?: Ordinal,
        zero_based_index?: number,
        nesting_depth?: number
    }): void {
        const ordinal = this.setup_ordinals({
            prefixed_ordinal,
            zero_based_index,
            nesting_depth
        });

        this.subchapters.forEach((chapter, index) => {
            chapter.assign_ordinals({
                prefixed_ordinal: ordinal,
                nesting_depth: nesting_depth + 1,
                zero_based_index: index
            });
        });
    }
}

interface ExpositionParams extends ChapterParams {
    components: ExpositionComponent[];
}

export class Exposition extends Chapter {
    public readonly components: ExpositionComponent[];

    constructor(params: ExpositionParams) {
        super({ 
            title: params.title, 
            is_book: params.is_book
        });
        this.components = params.components;
        if (params.is_book) {
            this.assign_ordinals({});
        }
    }

    public static from(
        components: ExpositionComponent[], 
        title: string | Prose, 
        is_book?: boolean
    ): Exposition {
        return new Exposition({
            components: components,
            title: title,
            is_book: is_book
        });
    }

    public static as_book(
        components: ExpositionComponent[], 
        title: string | Prose, 
    ): Exposition {
        return new Exposition({
            components: components,
            title: title,
            is_book: true
        });
    }

    public assign_ordinals({
        prefixed_ordinal,
        zero_based_index = 0,
        nesting_depth = 0
    }: {
        prefixed_ordinal?: Ordinal,
        zero_based_index?: number,
        nesting_depth?: number
    }): void {
        const ordinal = this.setup_ordinals({
            prefixed_ordinal,
            zero_based_index,
            nesting_depth
        });

        let statement_index = 0;
        this.components.forEach((item) => {
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