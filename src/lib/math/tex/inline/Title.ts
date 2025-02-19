import { Inline } from "./Inline";
import { Tex } from "../";
import { Optional } from "$lib/common/optional.type";

class Title {
    public readonly inline: Inline;
    private _label: Optional<Tex>;

    constructor({
        inline,
        label
    }: {
        inline: Inline,
        label?: Tex
    }) {
        this.inline = inline;
        this._label = label ?
            Optional.set(label) :
            Optional.none();
    }

    public has_label(): boolean {
        return this._label.is_set();
    }

    public set_label(label: Tex): void {
        this._label = Optional.set(label);
    }

    public get label(): string {
        return this._label.value.value;
    }
}

export { Title };
