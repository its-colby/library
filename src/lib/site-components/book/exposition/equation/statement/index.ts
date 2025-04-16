import { Ordinal } from "$book/utils";


export abstract class Statement {
    public abstract set_ordinal(ordinal: Ordinal): void;
}