import type { TEX } from "$lib/math/tex";
import { FieldOperation, AbelianGroupOperation } from "$lib/math/operations/index";
import { Field } from "./Field";

export class FiniteField extends Field {
    constructor({
        declaration,
        definitions,
        field_operation,
        group_operation,
        name
    }: {
        declaration: TEX,
        definitions: TEX[],
        field_operation: FieldOperation,
        group_operation: AbelianGroupOperation,
        name?: string
    }) {
        super({
            declaration, 
            definitions, 
            field_operation,
            group_operation,
            name
        });
    }
}