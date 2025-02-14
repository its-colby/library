import { type TEX, Block, Notation as N } from "$lib/math/tex";
import { AbelianGroupOperation, RingOperation, operations } from "$lib/math/operations";

import { AlgebraicStructure } from "../../utils";



export const RNG_DEFAULT_BB = N.CAL.R as TEX;


export class RNG extends AlgebraicStructure {

    public ring_operation: RingOperation;
    public group_operation: AbelianGroupOperation;


    constructor({
        declaration, 
        definitions,
        ring_operation,
        group_operation,
    }: {
        declaration?: TEX, 
        definitions?: Block,
        ring_operation?: RingOperation,
        group_operation?: AbelianGroupOperation,
    }) {

        const ring_op = ring_operation ?? operations.multiplication;
        const group_op = group_operation ?? operations.addition;
        
        super({
            declaration: declaration ?? RNG_DEFAULT_BB, 
            definitions, 
            operations: [ring_op, group_op],
        });

        this.ring_operation = ring_op;
        this.group_operation = group_op;
    }
}