import { Optional } from "$lib/common";
import { Ordinal } from "$lib/book/utils/ordinal";
import { Tex } from "../prose";
import { Statement } from "./statement";

export class Expression extends Statement {

    public readonly tex: Tex;
    public ordinal: Optional<Ordinal> = Optional.none();

    constructor(tex: Tex){
        super();
        this.tex = tex;
    }

    public set_ordinal(ordinal: Ordinal) {
        this.ordinal = Optional.set(ordinal);
    }
}