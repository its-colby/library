import { Block, Tex } from "$lib/math/tex";

import { Ring } from "$lib/math/structures/ring_like/ring";

import { TwoSidedIdeal } from "$lib/math/structures/ring_like/ideal";



export class QuotientRing extends Ring {

    public readonly ideal: TwoSidedIdeal;
    public readonly parent_ring: Ring;

    constructor({
        parent_ring, 
        definitions,
        ideal,
    }: {
        parent_ring: Ring, 
        definitions?: Block,
        ideal: TwoSidedIdeal,
    }) {

        super({
            declaration: Tex.concat([
                parent_ring.declaration,
                new Tex(" / "),
                ideal.declaration
            ]),
            definitions, 
        });

        this.parent_ring = parent_ring;
        this.ideal = ideal;
    }
}