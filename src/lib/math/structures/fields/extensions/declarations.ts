import { type TEX, Notation as N } from "$lib/math/tex";


export const FINITE_FIELD_EXTENSION_BB = {
    DEFAULT: N.concat([N.BB.F, `(${N.THETA})`]) as TEX,
    ALGEBRAIC_NUMBERS: N.BB.K as TEX,
}