import { type TEX, Block, Notation as N } from "$lib/math/tex";
import { MonoidOperation, operations } from "$lib/math/operations";

import { AlgebraicStructure } from "../utils";



export const MONOID_DEFAULT_BB = N.BB.M as TEX;


export class Monoid extends AlgebraicStructure {

    public readonly operation: MonoidOperation;
    
    constructor({
        declaration,
        definitions,
        operation,
    }: {
        declaration?: TEX,
        definitions?: Block,
        operation?: MonoidOperation,
    }) {
        
        const op = operation ?? operations.addition;
        
        super({
            declaration: declaration ?? MONOID_DEFAULT_BB, 
            definitions, 
            operations: [op], 
        });

        this.operation = op;
    }

}