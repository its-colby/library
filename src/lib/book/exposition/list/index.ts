import { Prose } from "../prose";

type ListElement = Prose | List;

export class List {
    public elements: ListElement[];

    constructor(elements: ListElement[]) {
        this.elements = elements;
    }
}