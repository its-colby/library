import type { List } from "../list";
import { Prose } from "../prose";
import { Statement } from "../equation";

export type DigressionElement = Prose | List | Statement;

export class Digression {
    public readonly elements: DigressionElement[];
    public readonly title: string;

    constructor(elements: DigressionElement[], title?: string) {
        this.elements = elements;
        this.title = title ?? "Click to Read Note";
    }
}