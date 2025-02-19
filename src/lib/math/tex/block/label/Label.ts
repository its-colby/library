import { Optional } from "$lib/common/optional.type";
import { Tex } from "$lib/math/tex/notation";
import { LabelType } from "./LabelType";
import { IndexType } from "./IndexType";
import { LabelConfig } from "./LabelConfig";


export class Label {

    private _index: number;
    private _override_index: Optional<number>;
    private _label_type: LabelType;

    private _prefixed_index: Optional<Tex> = Optional.none();
    private _label_config: LabelConfig;


    constructor({
        index,
        override_index,
        label_type = LabelType.NONE,
        label_config = new LabelConfig()
    }: {
        index?: number,
        override_index?: number,
        label_type?: LabelType,
        label_config?: LabelConfig
    } = {}) {

        this._index = index ?? 0;
        this._label_type = label_type ?? LabelType.DEFINITION;
        this._label_config = label_config;
        this._override_index = override_index ? 
            Optional.set(override_index) : 
            Optional.none();
    }

    public set_prefixed_index(prefixed_index: Tex) {
        this._prefixed_index = Optional.set(prefixed_index);
    }

    public set_index(index: number) {
        this._index = index;
    }

    public set_override_index(override_index: number) {
        this._override_index = Optional.set(override_index);
    }

    public set_label_config(label_config: LabelConfig) {
        this._label_config = label_config;
    }

    private get index_string() {
        return this._label_config.index_type === IndexType.NUMBER ?
            (this._index + 1).toString() :
            `\\text{${String.fromCharCode(97 + this._index)}}`;
    }

    private get no_prefixed_index(): boolean {
        return this._prefixed_index.is_none() || this._prefixed_index.value.is_empty;
    }

    public label(): Tex {

        const index = this._override_index.is_set() ?
            this._override_index.value.toString() :
            (this.no_prefixed_index || this._label_config.shorten_index) ?
                this.index_string :
                this._prefixed_index.value.value + "." + this.index_string;

        let label = new Tex("");

        switch (this._label_type) {
            case LabelType.DEFINITION:
                label = this._label_config.shorten_label_type ? 
                    Tex.from_text("def.") :
                    Tex.from_text("Definition");
                break;
            case LabelType.PROOF:
                label = this._label_config.shorten_label_type ? 
                    Tex.from_text("prf.") :
                    Tex.from_text("Proof");
                break;
            case LabelType.EXAMPLE:
                label = this._label_config.shorten_label_type ? 
                    Tex.from_text("ex.") :
                    Tex.from_text("Example");
                break;
        }

        const space = label.is_empty ? "" : " \\enspace ";

        return this._label_config.add_parens ?
            new Tex(`(${label.value}${space}${index})`) :
            new Tex(`${label.value}${space}${index}`);
    }
}