import type { TEX } from "$lib/math/tex";
import type { AbelianGroupOperation, CommutativeRingOperation } from "$lib/math/operations/index";
import { UnitalRing } from "./UnitalRing";

export class CommutativeRing extends UnitalRing {
    public ring_operation: CommutativeRingOperation;
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
        ring_operation: CommutativeRingOperation,
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