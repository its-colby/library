import { Block, type TEX, Notation as N } from "$lib/math/tex";
import { AbelianGroupOperation, UnitalRingOperation, operations } from "$lib/math/operations";

import { RNG } from "../rng";



export const RING_DEFAULT_BB = N.bb({
    letter: "R",
    sub: N.text("unital", false),
}) as TEX;


export class Ring extends RNG {

    constructor({
        declaration, 
        definitions,
        ring_operation,
        group_operation,
    }: {
        declaration?: TEX, 
        definitions?: Block,
        ring_operation?: UnitalRingOperation,
        group_operation?: AbelianGroupOperation,
    }) {

        super({
            declaration: declaration ?? RING_DEFAULT_BB, 
            definitions, 
            ring_operation: ring_operation ?? operations.multiplication,
            group_operation: group_operation ?? operations.addition,
        });
    }
}