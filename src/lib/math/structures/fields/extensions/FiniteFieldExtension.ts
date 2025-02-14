import { type TEX, Block, Notation as N } from "$lib/math/tex";
import { AbelianGroupOperation, FieldOperation } from "$lib/math/operations";

import { Field, FIELDS } from "$lib/math/structures/fields/core";

import { FieldExtension } from "./FieldExtension";
import { FINITE_FIELD_EXTENSION_BB } from "./declarations";


export class FiniteFieldExtension extends FieldExtension {

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
        super({
            declaration: declaration ?? FINITE_FIELD_EXTENSION_BB.DEFAULT, 
            definitions, 
            base_field: base_field ?? FIELDS.RATIONAL_NUMBERS, 
            field_operation, 
            group_operation, 
        });
    }

    public static adjoin_declaration({
        elements, 
        base_field
    }: {
        elements: TEX[], 
        base_field: TEX,
    }): TEX {
        return `${base_field}(${elements.join(', ')})` as TEX;
    }
}