import { type TEX, Notation as N } from "$lib/math/tex";


export const FIELD_BB = {
    DEFAULT: N.BB.F as TEX,
    RATIONALS: N.BB.Q as TEX,
    REALS: N.BB.R as TEX,
    COMPLEX: N.BB.C as TEX,
    ALGEBRAIC_NUMBERS: N.BB.A as TEX,
}

export const FINITE_FIELD_BB = N.bb({
    letter: "F",
    sub: N.text("finite", false),
}) as TEX;