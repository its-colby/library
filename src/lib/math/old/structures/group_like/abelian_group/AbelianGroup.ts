import { Tex, Block, Notation as N } from "$lib/math/tex";

import { Group } from "$lib/math/structures/group_like/group";



export const ABELIAN_GROUP_DEFAULT_BB = new Tex(N.BB.G).subscript(Tex.from_text("abelian"))


export class AbelianGroup extends Group {

    constructor({
        declaration,
        definitions,
    }: {
        declaration?: Tex,
        definitions?: Block,
    }) {
        super({
            declaration: declaration ?? ABELIAN_GROUP_DEFAULT_BB, 
            definitions, 
        });
    }
}