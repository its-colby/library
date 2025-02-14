import { FieldOperation, AbelianGroupOperation } from "$lib/math/operations";
import { type TEX, Block, Notation as N } from "$lib/math/tex";

import { Field, FIELDS } from "$lib/math/structures/fields/core";


export class FieldExtension extends Field {

    public base_field: Field;


    constructor({
        declaration,
        definitions,
        base_field,
        field_operation,
        group_operation,
    }: {
        declaration?: TEX,
        definitions?: Block,
        base_field?: Field,
        field_operation?: FieldOperation,
        group_operation?: AbelianGroupOperation,
    }) {

        const base = base_field ?? FIELDS.RATIONAL_NUMBERS;

        super({
            declaration: declaration ?? 
                FieldExtension.sub_declaration(
                    N.BB.F as TEX, 
                    base.declaration
                ),
            definitions,
            field_operation,
            group_operation,
        });

        this.base_field = base;
    }

    public static sub_declaration(field: TEX, base_field: TEX): TEX {
        return N.concat([field, N.sub(base_field)]);
    }

    public static slash_declaration(field: TEX, base_field: TEX): TEX {
        return `${field} / ${base_field}` as TEX;
    }
}