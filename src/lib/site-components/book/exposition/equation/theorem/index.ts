import { Optional } from "$common";
import { Prose } from "$book/exposition/prose";
import { Statement } from "$book/exposition/equation/statement";
import { Ordinal } from "$book/utils";

export class Theorem extends Statement {

    public prose: Prose;
    public ordinal: Optional<Ordinal> = Optional.none();

    constructor(prose: Prose) {
        super();
        this.prose = prose;
    }

    public set_ordinal(ordinal: Ordinal) {
        this.ordinal = Optional.set(ordinal);
    }
}