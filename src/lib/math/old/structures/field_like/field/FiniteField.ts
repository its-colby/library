import { Tex, Block, Notation as N } from "$lib/math/tex";

import { Field } from "./Field";
import { FINITE_FIELD_BB } from "./declarations";


export class FiniteField extends Field {

    constructor({
        declaration,
        definitions,
    }: {
        declaration?: Tex,
        definitions?: Block,
    }) {
        super({
            declaration: declaration ?? FINITE_FIELD_BB, 
            definitions, 
        });
    }
}