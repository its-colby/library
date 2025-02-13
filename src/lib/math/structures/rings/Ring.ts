import type { TEX } from "$lib/math/tex";
import type { AbelianGroupOperation, RingOperation } from "$lib/math/operations/index";
import { AlgebraicStructure } from "../utils/Structure";

export class Ring extends AlgebraicStructure {
    public ring_operation: RingOperation;
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
        ring_operation: RingOperation,
        group_operation: AbelianGroupOperation,
        name?: string
    }) {
        super({
            declaration, 
            definitions, 
            operations: [ring_operation, group_operation],
            name
        });
        this.ring_operation = ring_operation;
        this.group_operation = group_operation;
    }
}