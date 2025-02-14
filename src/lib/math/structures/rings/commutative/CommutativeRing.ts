import { Block, type TEX, Notation as N } from "$lib/math/tex";
import { AbelianGroupOperation, CommutativeRingOperation, operations } from "$lib/math/operations";

import { Ring } from "$lib/math/structures/rings/unital";
import { COMMUTATIVE_RING_BB } from "./declarations";


export class CommutativeRing extends Ring {

    constructor({
        declaration, 
        definitions,
        ring_operation,
        group_operation,
    }: {
        declaration?: TEX, 
        definitions?: Block,
        ring_operation?: CommutativeRingOperation,
        group_operation?: AbelianGroupOperation,
    }) {

        super({
            declaration: declaration ?? COMMUTATIVE_RING_BB.DEFAULT, 
            definitions, 
            ring_operation: ring_operation ?? operations.multiplication,
            group_operation: group_operation ?? operations.addition,
        });
    }
}