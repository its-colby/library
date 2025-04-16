import { Optional } from "$common";
import { Ordinal, Tex } from "$book/utils";
import { Statement } from "$book/exposition/equation/statement";

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