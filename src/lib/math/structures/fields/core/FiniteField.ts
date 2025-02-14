import { type TEX, Block, Notation as N } from "$lib/math/tex";
import { FieldOperation, AbelianGroupOperation } from "$lib/math/operations";

import { Field } from "./Field";
import { FINITE_FIELD_BB } from "./declarations";


export class FiniteField extends Field {

    constructor({
        declaration,
        definitions,
        field_operation,
        group_operation,
    }: {
        declaration?: TEX,
        definitions?: Block,
        field_operation?: FieldOperation,
        group_operation?: AbelianGroupOperation,
    }) {

        super({
            declaration: declaration ?? FINITE_FIELD_BB, 
            definitions, 
            field_operation,
            group_operation,
        });
    }
}