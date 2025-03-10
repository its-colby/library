import { Optional } from "$lib/common";
import { LabelConfig, LabelType, IndexType, Label } from "$lib/tex/label";
import { Tex } from "$lib/tex/notation";
import { Statement } from "./Statement";
import { Expression } from "./Expression";


const DEFAULT_LABEL_CONFIG = {
    shorten_label_type: true,
    shorten_index: false,
    add_parens: true,
};

export class OneLineStatement extends Statement {

    public expression: Expression;

    constructor({
        value,
        label_type = LabelType.NONE,
        index_type = IndexType.NUMBER
    }: {
        value: Tex,
        label_type?: LabelType,
        index_type?: IndexType
    }) {

        super();

        this.expression = new Expression({
            value,
            label: new Label({
                label_config: new LabelConfig({
                    ...DEFAULT_LABEL_CONFIG,
                    label_type,
                    index_type
                })
            })
        });
    }

    public set_index({
        index, 
        prefixed_index
    }: {
        index?: number, 
        prefixed_index?: Tex
    }) {
        this.expression.label.set_index({
            index,
            prefixed_index
        });
    }

    public static from_example(value: Tex) {
        return new OneLineStatement({
            value,
            label_type: LabelType.EXAMPLE
        });
    }

    public static from_definition(value: Tex) {
        return new OneLineStatement({
            value,
            label_type: LabelType.DEFINITION
        });
    }
}