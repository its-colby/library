import { type TEX, Block, Notation as N } from "$lib/math/tex";

import { Group } from "$lib/math/structures/core/group_like/group";



export const ABELIAN_GROUP_DEFAULT_BB = N.bb({
    letter: "G",
    sub: N.text("abelian", false),
}) as TEX;


export class AbelianGroup extends Group {

    constructor({
        declaration,
        definitions,
    }: {
        declaration?: TEX,
        definitions?: Block,
    }) {
        super({
            declaration: declaration ?? ABELIAN_GROUP_DEFAULT_BB, 
            definitions, 
        });
    }
}