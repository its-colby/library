import { Block } from "$lib/tex/block";
import { Tex } from "$lib/tex/notation";
import { Inline, Title, Note, List } from "$lib/tex/inline";
import { Optional } from "$lib/common";

export class Section {
    public readonly title: Title;
    public section_depth: Optional<number> = Optional.none();
    private _show_content: boolean;
    public sections: Optional<Section[]>;
    public content: Optional<(Inline | Block | Note | List)[]>;

    constructor({
        title,
        sections,
        content
    }: {
        title: Title,
        sections?: Section[],
        content?: (Inline | Block | Note | List)[]
    }) {
        this.title = title;
        this.sections = sections ? Optional.set(sections) : Optional.none();
        this.content = content ? Optional.set(content) : Optional.none();
        this._show_content = content !== undefined;
    }

    public get show_content(): boolean {
        return this._show_content && this.content.is_set();
    }

    public get show_sections(): boolean {
        return !this._show_content && this.sections.is_set();
    }

    public get depth(): number {
        return this.section_depth.is_set() ? this.section_depth.value : 0;
    }

    public assign_indices({
        prefixed_index,
        index,
        depth = 0
    }: {
        prefixed_index?: Tex,
        index?: number,
        depth?: number
    }) {

        this.section_depth = Optional.set(depth);

        this.title.set_index({
            index: depth === 0 ?
                undefined :
                index,
            prefixed_index
        });

        const new_prefixed_index = this.title.label.entire_index();

        if (this.show_sections) {
            this.sections.value.forEach((section, index) => {
                section.assign_indices({
                    prefixed_index: new_prefixed_index,
                    depth: depth + 1,
                    index: index
                });
            });
        } else if (this.show_content) {
            let statement_index = 0;
            this.content.value.forEach((item) => {
                if (item instanceof Block) {
                    item.set_index({
                        prefixed_index: new_prefixed_index,
                        index: statement_index
                    });
                    statement_index += item.num_statements;
                }
            });
        }
    }
}