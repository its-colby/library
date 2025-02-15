import { Tex, Notation as N } from "$lib/math/tex";


export const FINITE_FIELD_EXTENSION_BB = {
    DEFAULT: new Tex(N.BB.F).append(Tex.parens(N.THETA)),
    ALGEBRAIC_NUMBERS: new Tex(N.BB.K),
}