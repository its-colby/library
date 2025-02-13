import type { TEX } from "$lib/math/tex";
import type { AbelianGroupOperation, UnitalRingOperation } from "$lib/math/operations/index";
import { Ring } from "./Ring";

export class UnitalRing extends Ring {
    public ring_operation: UnitalRingOperation;
    public group_operation: AbelianGroupOperation;

    constructor({
        declaration, 
        definitions,
        ring_operation,
        group_operation,
        name
    }: {
        declaration: TEX, 
        definitions: TEX[],
        ring_operation: UnitalRingOperation,
        group_operation: AbelianGroupOperation,
        name?: string
    }) {
        super({
            declaration, 
            definitions, 
            ring_operation,
            group_operation,
            name
        });
        this.ring_operation = ring_operation;
        this.group_operation = group_operation;
    }
}