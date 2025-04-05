import { Tex } from "$book/utils";
import { Statement } from "$book/exposition/equation/statement";
import { Expression } from "$book/exposition/equation/expression";
import { Ordinal } from "$lib/book/utils/ordinal";

export class Conditions extends Statement {

    public primary: Expression;
    public secondaries: Expression[];

    constructor({
        primary,
        secondaries
    }: {
        primary: Tex,
        secondaries: Tex[]
    }) {
        super();
        this.primary = new Expression(primary);
        this.secondaries = secondaries.map(secondary => new Expression(secondary));
    }

    public static from_list(list: Tex[]) {
        return new Conditions({
            primary: list[0],
            secondaries: list.slice(1)
        });
    }

    public set_ordinal(ordinal: Ordinal) {
        this.primary.set_ordinal(ordinal);
    }
}