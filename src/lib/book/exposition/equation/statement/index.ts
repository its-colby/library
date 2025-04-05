import { Ordinal } from "$lib/book/utils/ordinal";


export abstract class Statement {
    public abstract set_ordinal(ordinal: Ordinal): void;
}