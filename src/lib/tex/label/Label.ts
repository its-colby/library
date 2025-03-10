import { Optional } from "$lib/common";
import { Tex } from "$lib/tex/notation";
import { LabelType } from "./LabelType";
import { IndexType } from "./IndexType";
import { LabelConfig } from "./LabelConfig";


export class Label {

    private _prefixed_index: Optional<Tex> = Optional.none();
    private _index: number;
    private _override_index: Optional<number>;

    
    private _label_config: LabelConfig;


    constructor({
        prefixed_index,
        index = 0,
        override_index,
        label_config = new LabelConfig()
    }: {
        prefixed_index?: Tex,
        index?: number,
        override_index?: number,
        label_config?: LabelConfig
    } = {}) {

        this._prefixed_index = prefixed_index ? Optional.set(prefixed_index) : Optional.none();

        this._index = index;

        this._override_index = override_index ? 
            Optional.set(override_index) : 
            Optional.none();

        this._label_config = label_config;
    }

    public set_index({
        index, 
        prefixed_index
    }: {
        index?: number, 
        prefixed_index?: Tex
    }) {
        if (index) {
            this._index = index;
        }
        if (prefixed_index) {
            this._prefixed_index = Optional.set(prefixed_index);
        }
    }

    public set_override_index(override_index: number) {
        this._override_index = Optional.set(override_index);
    }

    private get index_string() {
        return this._label_config.index_type === IndexType.NUMBER ?
            (this._index + 1).toString() :
            this._label_config.index_type === IndexType.LETTER ?
                `\\text{${String.fromCharCode(97 + this._index)}}` :
                "";
    }

    private get no_prefixed_index(): boolean {
        return this._prefixed_index.is_none() || this._prefixed_index.value.is_empty;
    }

    public exists(): boolean {
        return this._label_config.index_type !== IndexType.NONE && this._label_config.label_type !== LabelType.NONE;
    }

    public entire_index(): Tex {
        return this.no_prefixed_index ?
            new Tex(this.index_string) :
            new Tex(this._prefixed_index.value.value + "." + this.index_string);
    }

    public label(): Tex {

        const index = this._override_index.is_set() ?
            this._override_index.value.toString() :
            (this.no_prefixed_index || this._label_config.shorten_index) ?
                this.index_string :
                this._prefixed_index.value.value + "." + this.index_string;

        let label = new Tex("");

        switch (this._label_config.label_type) {
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