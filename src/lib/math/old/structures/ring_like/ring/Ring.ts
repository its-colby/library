import { Block, Tex, Notation as N } from "$lib/math/tex";

import { RNG } from "$lib/math/structures/ring_like/rng";



export const RING_DEFAULT_BB = new Tex(N.BB.R).subscript(Tex.from_text("unital"))


export class Ring extends RNG {

    constructor({
        declaration, 
        definitions,
    }: {
        declaration?: Tex, 
        definitions?: Block,
    }) {

        super({
            declaration: declaration ?? RING_DEFAULT_BB, 
            definitions, 
        });
    }
}