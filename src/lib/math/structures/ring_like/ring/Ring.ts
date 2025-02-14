import { Block, type TEX, Notation as N } from "$lib/math/tex";

import { RNG } from "$lib/math/structures/ring_like/rng";



export const RING_DEFAULT_BB = N.bb({
    letter: "R",
    sub: N.text("unital", false),
}) as TEX;


export class Ring extends RNG {

    constructor({
        declaration, 
        definitions,
    }: {
        declaration?: TEX, 
        definitions?: Block,
    }) {

        super({
            declaration: declaration ?? RING_DEFAULT_BB, 
            definitions, 
        });
    }
}