import { Inline } from "./Inline";

export class Note {
    public readonly inlines: Inline[];
    public readonly title: string;

    constructor(inlines: Inline[], title?: string) {
        this.inlines = inlines;
        this.title = title ?? "Click to Read Note";
    }
}