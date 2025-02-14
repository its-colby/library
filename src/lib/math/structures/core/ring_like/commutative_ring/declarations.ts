import { type TEX, Notation as N } from "$lib/math/tex";

const INTEGERS = N.BB.Z as TEX;
const ALGEBRAIC_INTEGERS = N.CAL.O as TEX;

const ALGEBRAIC_INTEGERS_OF_K = N.concat([
    ALGEBRAIC_INTEGERS, 
    N.sub(N.BB.K)
]);

const DEFAULT = N.bb({
    letter: "R",
    sub: N.text("commutative", false),
});

const UNIVARIATE_POLYNOMIALS = N.concat([
    INTEGERS, 
    "[x]"
]);

export const COMMUTATIVE_RING_BB = {
    DEFAULT,
    INTEGERS,
    ALGEBRAIC_INTEGERS,
    ALGEBRAIC_INTEGERS_OF_K,
    UNIVARIATE_POLYNOMIALS,
} as const;