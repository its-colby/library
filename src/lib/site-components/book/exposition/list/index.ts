import { Prose } from "$book/exposition/prose";

type ListElement = Prose | List;

export class List {
    public elements: ListElement[];
    public style: "bullet" | "number";

    constructor(
        elements: ListElement[], 
        style: "bullet" | "number" = "bullet"
    ) {
        this.elements = elements;
        this.style = style;
    }

    public static numbered(elements: ListElement[]): List {
        return new List(elements, "number");
    }
}