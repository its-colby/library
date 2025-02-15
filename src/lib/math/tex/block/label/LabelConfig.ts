import { IndexType } from "./IndexType";

export class LabelConfig {
    public readonly shorten_label_type: boolean;
    public readonly shorten_index: boolean;
    public readonly add_parens: boolean;
    public readonly index_type: IndexType;

    public constructor({
        shorten_label_type = false,
        shorten_index = false,
        add_parens = true,
        index_type = IndexType.NUMBER
    }: {
        shorten_label_type?: boolean;
        shorten_index?: boolean;
        add_parens?: boolean;
        index_type?: IndexType;
    } = {}) {
        this.shorten_label_type = shorten_label_type;
        this.shorten_index = shorten_index;
        this.add_parens = add_parens;
        this.index_type = index_type;
    }
}