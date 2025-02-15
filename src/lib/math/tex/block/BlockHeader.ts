import { Tex } from "$lib/math/tex/notation";
import { Label, LabelConfig, LabelType, IndexType } from "./label";

export class BlockHeader {

    private static _label_config: LabelConfig = new LabelConfig({
        shorten_label_type: false,
        shorten_index: false,
        add_parens: false,
        index_type: IndexType.NUMBER
    });

    public readonly title: Tex;
    private _label: Label;

    constructor({
        title,
        label_type = LabelType.NONE
    }: {
        title: Tex,
        label_type?: LabelType
    }) {
        this.title = title;
        this._label = new Label({
            label_type,
            label_config: BlockHeader._label_config
        });
    }

    public set_prefixed_index(prefixed_index: Tex) {
        this._label.set_prefixed_index(prefixed_index);
    }

    public set_label_index(index: number) {
        this._label.set_index(index);
    }

    public get label(): Tex {
        return this._label.label();
    }
}