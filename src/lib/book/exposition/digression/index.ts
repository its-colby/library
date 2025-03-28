import { Prose } from "../prose";

export class Digression {
    public readonly paragraphs: Prose[];
    public readonly title: string;

    constructor(paragraphs: Prose[], title?: string) {
        this.paragraphs = paragraphs;
        this.title = title ?? "Click to Read Note";
    }
}