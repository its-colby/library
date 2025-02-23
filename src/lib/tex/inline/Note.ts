import { Inline } from "./Inline";

export class Note {
    public readonly inlines: Inline[];
    public readonly title: Inline;

    constructor(inlines: Inline[], title?: Inline) {
        this.inlines = inlines;
        this.title = title ?? new Inline(["Click to Read Note"]);
    }
}