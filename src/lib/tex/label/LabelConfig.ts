import { IndexType } from "./IndexType";
import { LabelType } from "./LabelType";

export class LabelConfig {
    public readonly shorten_label_type: boolean;
    public readonly shorten_index: boolean;
    public readonly add_parens: boolean;
    public readonly index_type: IndexType;
    public readonly label_type: LabelType;

    public constructor({
        shorten_label_type = false,
        shorten_index = false,
        add_parens = true,
        index_type = IndexType.NUMBER,
        label_type = LabelType.NONE
    }: {
        shorten_label_type?: boolean;
        shorten_index?: boolean;
        add_parens?: boolean;
        index_type?: IndexType;
        label_type?: LabelType;
    } = {}) {
        this.shorten_label_type = shorten_label_type;
        this.shorten_index = shorten_index;
        this.add_parens = add_parens;
        this.index_type = index_type;
        this.label_type = label_type;
    }
}