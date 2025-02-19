import { Tex, Block, Notation as N } from "$lib/math/tex";

import { AlgebraicStructure } from "$lib/math/structures/set_like";



export const RNG_DEFAULT_BB = new Tex(N.CAL.R);


export class RNG extends AlgebraicStructure {

    constructor({
        declaration, 
        definitions,
    }: {
        declaration?: Tex, 
        definitions?: Block,
    }) {

        super({
            declaration: declaration ?? RNG_DEFAULT_BB, 
            definitions, 
        });
    }
}