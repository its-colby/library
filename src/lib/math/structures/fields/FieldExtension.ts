import type { FieldOperation, AbelianGroupOperation } from "$lib/math/operations/index";
import type { TEX } from "$lib/math/tex";
import { Field } from "./Field";

export class FieldExtension extends Field {
    public base_field: Field;

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
            field_operation,
            group_operation,
            name
        });
        this.base_field = base_field;
    }

    static standard_declaration(field: TEX, base_field: TEX): TEX {
        return `${field} / ${base_field}` as TEX;
    }
}