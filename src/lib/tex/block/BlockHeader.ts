import { Tex } from "$lib/tex/notation";
import { Label, LabelConfig, LabelType, IndexType } from "$lib/tex/label";


const DEFAULT_LABEL_CONFIG = {
    shorten_label_type: false,
    shorten_index: false,
    add_parens: false,
    index_type: IndexType.NUMBER,
};

export class BlockHeader {

    public readonly title: Tex;
    public label: Label;

    constructor({
        title,
        label_type = LabelType.NONE
    }: {
        title: Tex,
        label_type?: LabelType
    }) {
        this.title = title;
        this.label = new Label({
            label_config: new LabelConfig({
                ...DEFAULT_LABEL_CONFIG,
                label_type
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
        this.label.set_index({
            index,
            prefixed_index
        });
    }
}