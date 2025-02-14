import { type TEX, Block, Notation as N } from "$lib/math/tex";
import { FieldOperation, AbelianGroupOperation, operations } from "$lib/math/operations";

import { AlgebraicStructure } from "$lib/math/structures/utils";
import { FIELD_BB } from "./declarations";


export class Field extends AlgebraicStructure {

    public field_operation: FieldOperation;
    public group_operation: AbelianGroupOperation;


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

        const field_op = field_operation ?? operations.multiplication;
        const group_op = group_operation ?? operations.addition;

        super({
            declaration: declaration ?? FIELD_BB.DEFAULT,
            definitions, 
            operations: [field_op, group_op],
        });
        this.field_operation = field_op;
        this.group_operation = group_op;
    }
}