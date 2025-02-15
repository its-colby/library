import { Tex, Notation as N } from "$lib/math/tex";


export const FIELD_BB = {
    DEFAULT: new Tex(N.BB.F),
    RATIONALS: new Tex(N.BB.Q),
    REALS: new Tex(N.BB.R),
    COMPLEX: new Tex(N.BB.C),
    ALGEBRAIC_NUMBERS: new Tex(N.BB.A),
}

export const FINITE_FIELD_BB = FIELD_BB.DEFAULT.subscript(Tex.from_text("finite"));