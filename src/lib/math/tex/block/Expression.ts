import { Tex } from "$lib/math/tex/notation";
import { Label, LabelConfig, LabelType } from "./label";



export class Expression {

    public readonly value: Tex;
    private _label: Label;


    constructor({
        value,
        label_type = LabelType.NONE,
    }: {
        value: Tex,
        label_type?: LabelType,
    }) {

        this.value = value;
        this._label = new Label({
            label_type
        });
    }

    public set_label_config(label_config: LabelConfig) {
        this._label.set_label_config(label_config);
    }

    public set_index(index: number) {
        this._label.set_index(index);
    }

    public get label(): Tex {
        return this._label.label();
    }
}