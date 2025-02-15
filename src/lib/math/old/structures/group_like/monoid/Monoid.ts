import { Tex, Block, Notation as N } from "$lib/math/tex";

import { AlgebraicStructure } from "$lib/math/structures/set_like";



export const MONOID_DEFAULT_BB = new Tex(N.BB.M);


export class Monoid extends AlgebraicStructure {
    
    constructor({
        declaration,
        definitions,
    }: {
        declaration?: Tex,
        definitions?: Block,
    }) {  
        super({
            declaration: declaration ?? MONOID_DEFAULT_BB, 
            definitions, 
        });
    }

}