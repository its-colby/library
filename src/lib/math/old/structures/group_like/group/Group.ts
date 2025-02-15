import { Tex, Block, Notation as N } from "$lib/math/tex";

import { Monoid } from "$lib/math/structures/group_like/monoid";



export const GROUP_DEFAULT_BB = new Tex(N.BB.G);


export class Group extends Monoid {

    constructor({
        declaration,
        definitions,
    }: {
        declaration?: Tex,
        definitions?: Block,
    }) {
        super({
            declaration: declaration ?? GROUP_DEFAULT_BB, 
            definitions, 
        });
    }
}