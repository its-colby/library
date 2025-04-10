import { Optional } from "$lib/common";
import { Prose } from "$book/exposition/prose";
import { Statement } from "$book/exposition/equation/statement";
import { Ordinal } from "$lib/book/utils/ordinal";

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