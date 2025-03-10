import { Optional } from "$lib/common";
import { LabelConfig, LabelType, IndexType, Label } from "$lib/tex/label";
import { Tex } from "$lib/tex/notation";
import { Statement } from "./Statement";
import { Expression } from "./Expression";

const DEFAULT_PRIMARY_LABEL_CONFIG = {
    shorten_label_type: true,
    shorten_index: false,
    add_parens: true,
    index_type: IndexType.NUMBER,
    label_type: LabelType.NONE
};

const DEFAULT_SECONDARY_LABEL_CONFIG = {
    shorten_label_type: true,
    shorten_index: true,
    add_parens: true,
    index_type: IndexType.LETTER,
    label_type: LabelType.NONE
};

export class MultiLineStatement extends Statement {

    public primary: Expression;
    public secondaries: Expression[];

    constructor({
        primary,
        secondaries
    }: {
        primary: Tex,
        secondaries: Tex[]
    }) {

        super();

        this.primary = new Expression({
            value: primary,
            label: new Label({
                label_config: DEFAULT_PRIMARY_LABEL_CONFIG
            })
        });

        let secondary_index = 0;
        this.secondaries = secondaries.map(secondary => {
            return new Expression({
                value: secondary,
                label: new Label({
                    label_config: DEFAULT_SECONDARY_LABEL_CONFIG,
                    index: secondary_index++
                })
            })
        });
    }

    public set_index({
        index,
        prefixed_index
    }: {
        index: number,
        prefixed_index: Tex
    }) {
        this.primary.label.set_index({
            index,
            prefixed_index
        });
    }
}