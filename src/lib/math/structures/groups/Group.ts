import type { GroupOperation } from "$lib/math/operations/index";
import type { TEX } from "$lib/math/tex";
import { Monoid } from "./Monoid";

export class Group extends Monoid {
    constructor({
        declaration,
        definitions,
        operation,
        name
    }: {
        declaration: TEX,
        definitions: TEX[],
        operation: GroupOperation,
        name?: string
    }) {
        super({declaration, definitions, operation, name});
    }
}