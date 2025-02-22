import { Optional } from "$lib/common/optional.type";
import { LabelConfig, LabelType, IndexType, Label } from "$lib/tex/label";
import { Tex } from "$lib/tex/notation";
import { Statement } from "./Statement";
import { Expression } from "./Expression";
import { Inline } from "$lib/tex/inline";


const DEFAULT_LABEL_CONFIG = {
    shorten_label_type: true,
    shorten_index: false,
    add_parens: true,
};

export class InlineWrapper extends Statement {

    public inline: Inline;
    public label: Label;

    constructor({
        inline,
        label_type = LabelType.NONE,
        index_type = IndexType.NUMBER
    }: {
        inline: Inline,
        label_type?: LabelType,
        index_type?: IndexType
    }) {

        super();

        this.inline = inline;
        this.label = new Label({
            label_config: new LabelConfig({
                ...DEFAULT_LABEL_CONFIG,
                label_type,
                index_type
            })
        })
    }


    public set_index({
        index, 
        prefixed_index
    }: {
        index?: number, 
        prefixed_index?: Tex
    }) {
        this.label.set_index({
            index,
            prefixed_index
        });
    }
}