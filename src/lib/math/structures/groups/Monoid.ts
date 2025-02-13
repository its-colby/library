import { type TEX } from "$lib/math/tex";
import { AlgebraicStructure } from "../utils/Structure";
import { MonoidOperation } from "$lib/math/operations/index";

export class Monoid extends AlgebraicStructure {
    constructor({
        declaration,
        definitions,
        operation,
        name
    }: {
        declaration: TEX,
        definitions: TEX[],
        operation: MonoidOperation,
        name?: string
    }) {
        super({
            declaration, 
            definitions, 
            operations: [operation], 
            name
        });
    }
}