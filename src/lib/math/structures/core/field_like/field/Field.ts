import { type TEX, Block, Notation as N } from "$lib/math/tex";

import { AlgebraicStructure } from "$lib/math/structures/core/set_like";

import { FIELD_BB } from "./declarations";



export class Field extends AlgebraicStructure {

    constructor({
        declaration,
        definitions,
    }: {
        declaration?: TEX,
        definitions?: Block,
    }) {
        super({
            declaration: declaration ?? FIELD_BB.DEFAULT,
            definitions, 
        });
    }
}