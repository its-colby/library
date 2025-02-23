import { Inline } from "./Inline";
import { Tex } from "../";
import { Label, LabelConfig, IndexType, LabelType } from "$lib/tex/label";

const DEFAULT_LABEL_CONFIG = new LabelConfig({
    shorten_label_type: false,
    shorten_index: false,
    add_parens: false,
});

export class Title {
    public readonly inline: Inline;
    public label: Label;

    constructor({
        inline,
        index_type = IndexType.NUMBER
    }: {
        inline: Inline,
        index_type?: IndexType
    }) {
        this.inline = inline;
        this.label = new Label({
            label_config: new LabelConfig({
                ...DEFAULT_LABEL_CONFIG,
                label_type: LabelType.NONE,
                index_type: index_type
            }),
        });
    }

    public has_label(): boolean {
        return this.label.exists();
    }

    public get href(): string {
        return this.inline.to_string() + " " + this.label.label().value;
    }

    public set_index({
        index,
        prefixed_index
    }: {
        index?: number,
        prefixed_index?: Tex
    }): void {
        this.label.set_index({index, prefixed_index});
    }

    public static document_title(inline: Inline): Title {
        return new Title({
            inline,
            index_type: IndexType.NONE
        });
    }
}
