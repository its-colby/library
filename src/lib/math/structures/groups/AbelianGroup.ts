import { AbelianGroupOperation, operations } from "$lib/math/operations";
import { type TEX, Block, Notation as N } from "$lib/math/tex";

import { Group } from "./Group";



export const ABELIAN_GROUP_DEFAULT_BB = N.bb({
    letter: "G",
    sub: N.text("abelian", false),
}) as TEX;


export class AbelianGroup extends Group {

    constructor({
        declaration,
        definitions,
        operation,
    }: {
        declaration?: TEX,
        definitions?: Block,
        operation?: AbelianGroupOperation,
    }) {

        super({
            declaration: declaration ?? ABELIAN_GROUP_DEFAULT_BB, 
            definitions, 
            operation: operation ?? operations.addition,
        });
    }
}