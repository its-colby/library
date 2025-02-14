import { type TEX, Block, Notation as N } from "$lib/math/tex";

import { AlgebraicStructure } from "$lib/math/structures/set_like";



export const RNG_DEFAULT_BB = N.CAL.R as TEX;


export class RNG extends AlgebraicStructure {

    constructor({
        declaration, 
        definitions,
    }: {
        declaration?: TEX, 
        definitions?: Block,
    }) {

        super({
            declaration: declaration ?? RNG_DEFAULT_BB, 
            definitions, 
        });
    }
}