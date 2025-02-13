import type { TEX } from "$lib/math/tex";
import { AlgebraicStructure } from "../utils/Structure";
import { FieldOperation, AbelianGroupOperation } from "$lib/math/operations/index";

export class Field extends AlgebraicStructure {
    public field_operation: FieldOperation;
    public group_operation: AbelianGroupOperation;

    constructor({
        declaration,
        definitions,
        field_operation,
        group_operation,
        name
    }: {
        declaration: TEX,
        definitions: TEX[],
        field_operation: FieldOperation,
        group_operation: AbelianGroupOperation,
        name?: string
    }) {
        super({
            declaration, 
            definitions, 
            operations: [field_operation, group_operation],
            name
        });
        this.field_operation = field_operation;
        this.group_operation = group_operation;
    }

    static boldF({
        sub, 
        exp
    }: {
        sub?: string, 
        exp?: string
    } = {}): TEX {
        return AlgebraicStructure.bold({
            letter: "F", 
            sub: sub, 
            exp: exp
        });
    }
}