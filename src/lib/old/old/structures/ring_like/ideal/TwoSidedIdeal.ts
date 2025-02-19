import { Tex, Block, Notation as N } from "$lib/math/tex";

import { RNG } from "$lib/math/structures/ring_like/rng";

export const IDEAL_BB = new Tex(N.CAL.I);

export class TwoSidedIdeal extends RNG {
    constructor({
        declaration,
        definitions,
    }: {
        declaration?: Tex,
        definitions: Block,
    }) {
        super({
            declaration: declaration ?? IDEAL_BB, 
            definitions
        });
    }
}