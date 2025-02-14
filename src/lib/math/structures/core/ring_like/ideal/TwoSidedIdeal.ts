import { type TEX, Block } from "$lib/math/tex";

import { RNG } from "$lib/math/structures/core/ring_like/rng";



export class TwoSidedIdeal extends RNG {
    constructor({
        declaration,
        definitions,
    }: {
        declaration: TEX,
        definitions: Block,
    }) {
        super({declaration, definitions});
    }
}