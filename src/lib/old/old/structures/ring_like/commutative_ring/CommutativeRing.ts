import { Block, Tex } from "$lib/math/tex";

import { Ring } from "$lib/math/structures/ring_like/ring";
import { COMMUTATIVE_RING_BB } from "./declarations";


export class CommutativeRing extends Ring {

    constructor({
        declaration, 
        definitions,
    }: {
        declaration?: Tex, 
        definitions?: Block,
    }) {

        super({
            declaration: declaration ?? COMMUTATIVE_RING_BB.DEFAULT, 
            definitions, 
        });
    }
}