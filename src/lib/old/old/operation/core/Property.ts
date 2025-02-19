import { Block } from "$lib/math/tex";

export class Property {

    public readonly definition: Block;

    constructor({
        definition
    }: {
        definition: Block
    }) {
        this.definition = definition;
    }
}