import { type TEX, Block, Notation as N } from "$lib/math/tex";

import { AlgebraicStructure } from "$lib/math/structures/core/set_like/algebraic_structure";



export const MONOID_DEFAULT_BB = N.BB.M as TEX;


export class Monoid extends AlgebraicStructure {
    
    constructor({
        declaration,
        definitions,
    }: {
        declaration?: TEX,
        definitions?: Block,
    }) {  
        super({
            declaration: declaration ?? MONOID_DEFAULT_BB, 
            definitions, 
        });
    }

}