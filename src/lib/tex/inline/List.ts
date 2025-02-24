import type { Inline } from "./Inline";

export class List {
    public inlines: Inline[];

    constructor(inlines: Inline[]) {
        this.inlines = inlines;
    }
}