import { Tex } from "../";
import { Label, LabelConfig, IndexType, LabelType } from "$lib/tex/label";

const DEFAULT_LABEL_CONFIG = new LabelConfig({
    shorten_label_type: false,
    shorten_index: false,
    add_parens: false,
});

export class Title {
    public readonly value: string;
    public label: Label;

    constructor({
        value,
        index_type = IndexType.NUMBER
    }: {
        value: string,
        index_type?: IndexType
    }) {
        this.value = value;
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
        return this.value + " " + this.label.label().value;
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

    public static document_title(value: string): Title {
        return new Title({
            value,
            index_type: IndexType.NONE
        });
    }
}
