import type { TEX } from "$lib/math/tex";
import { Operator } from "../utils/Operator";

export class Property {
    private _name: string;
    public operators: Operator[];
    public definition: TEX;

    constructor({
        name,
        operators,
        definition
    }: {
        name: string,
        operators: Operator[],
        definition: TEX
    }) {
        this._name = name;
        this.operators = operators;
        this.definition = definition;
    }

    get name(): string {
        return this._name + " Property";
    }

    static equivalence(lhs: TEX, rhs: TEX): TEX {
        return `${lhs} = ${rhs}` as TEX;
    }
}