import { Tex, Block, Notation as N } from "$lib/math/tex";

import { AlgebraicStructure } from "$lib/math/structures/set_like";

import { FIELD_BB } from "./declarations";



export class Field extends AlgebraicStructure {

    constructor({
        declaration,
        definitions,
    }: {
        declaration?: Tex,
        definitions?: Block,
    }) {
        super({
            declaration: declaration ?? FIELD_BB.DEFAULT,
            definitions, 
        });
    }
}