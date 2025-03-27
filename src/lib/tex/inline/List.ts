import type { Inline } from "./Inline";

export type ListElement = [Inline] | [Inline, List];

export class List {
    public elements: ListElement[];

    constructor(param: ListElement[] | Inline[]) {
        if (param.length === 0 || Array.isArray(param[0])) {
            // ListElement[]
            this.elements = param as ListElement[];
        } else {
            // Inline[]
            this.elements = (param as Inline[]).map(inline => [inline]);
        }
    }
}