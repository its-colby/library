import type { TEX } from "$lib/math/tex";
import { FieldExtension } from "./FieldExtension";
import { Field } from "./Field";
import type { AbelianGroupOperation, FieldOperation } from "$lib/math/operations/index";

export class FiniteFieldExtension extends FieldExtension {
    constructor({
        declaration,
        definitions,
        base_field,
        field_operation,
        group_operation,
        name
    }: {
        declaration: TEX,
        definitions: TEX[],
        base_field: Field,
        field_operation: FieldOperation,
        group_operation: AbelianGroupOperation,
        name?: string
    }) {
        super({
            declaration, 
            definitions, 
            base_field, 
            field_operation, 
            group_operation, 
            name
        });
    }

    public static adjoin_elements({
        elements, 
        base_field
    }: {
        elements: TEX[], 
        base_field: Field,
    }): TEX {
        return `${base_field.declaration}(${elements.join(', ')})` as TEX;
    }
}