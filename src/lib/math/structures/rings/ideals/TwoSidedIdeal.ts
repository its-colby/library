import { type TEX, Block } from "$lib/math/tex";
import { AbelianGroupOperation, RingOperation } from "$lib/math/operations";

import { RNG } from "../rng";



export class TwoSidedIdeal extends RNG {
    constructor({
        declaration,
        definitions,
        ring_operation,
        group_operation
    }: {
        declaration: TEX,
        definitions: Block,
        ring_operation: RingOperation,
        group_operation: AbelianGroupOperation
    }) {
        super({declaration, definitions, ring_operation, group_operation});
    }
}