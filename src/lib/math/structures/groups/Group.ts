import { GroupOperation, operations } from "$lib/math/operations";
import { type TEX, Block, Notation as N } from "$lib/math/tex";

import { Monoid } from "./Monoid";



export const GROUP_DEFAULT_BB = N.BB.G as TEX;


export class Group extends Monoid {

    constructor({
        declaration,
        definitions,
        operation,
    }: {
        declaration?: TEX,
        definitions?: Block,
        operation?: GroupOperation,
    }) {

        super({
            declaration: declaration ?? GROUP_DEFAULT_BB, 
            definitions, 
            operation: operation ?? operations.addition,
        });
    }
}