import type { AbelianGroupOperation } from "$lib/math/operations/index";
import type { TEX } from "$lib/math/tex";
import { Group } from "./Group";

export class AbelianGroup extends Group {
    constructor({
        declaration,
        definitions,
        operation,
        name
    }: {
        declaration: TEX,
        definitions: TEX[],
        operation: AbelianGroupOperation,
        name?: string
    }) {
        super({
            declaration, 
            definitions, 
            operation, 
            name
        });
    }
}