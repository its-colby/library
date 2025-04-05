import { List } from "$book/exposition/list";
import { Prose } from "$book/exposition/prose";
import { Statement } from "$book/exposition/equation";

export type DigressionElement = Prose | List | Statement;

export class Digression {
    public readonly elements: DigressionElement[];
    public readonly title: string;

    constructor(elements: DigressionElement[], title?: string) {
        this.elements = elements;
        this.title = title ?? "Click to Read Note";
    }
}