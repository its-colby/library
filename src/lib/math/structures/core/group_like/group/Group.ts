import { type TEX, Block, Notation as N } from "$lib/math/tex";

import { Monoid } from "$lib/math/structures/core/group_like/monoid";



export const GROUP_DEFAULT_BB = N.BB.G as TEX;


export class Group extends Monoid {

    constructor({
        declaration,
        definitions,
    }: {
        declaration?: TEX,
        definitions?: Block,
    }) {
        super({
            declaration: declaration ?? GROUP_DEFAULT_BB, 
            definitions, 
        });
    }
}