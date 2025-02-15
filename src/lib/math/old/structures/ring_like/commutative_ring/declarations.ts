import { Tex, Notation as N } from "$lib/math/tex";

const INTEGERS = new Tex(N.BB.Z);
const ALGEBRAIC_INTEGERS = new Tex(N.CAL.O);

const ALGEBRAIC_INTEGERS_OF_K = ALGEBRAIC_INTEGERS.subscript(new Tex(N.BB.K));

const DEFAULT = new Tex(N.CAL.R).subscript(Tex.from_text("commutative"));

const UNIVARIATE_INTEGER_POLYNOMIALS = INTEGERS.append("[x]");

const UNIVARIATE_RATIONAL_POLYNOMIALS = new Tex(N.BB.Q).append("[x]");

const CONTINUOUS_FUNCTIONS = new Tex(N.CAL.C).append("[X]");

export const COMMUTATIVE_RING_BB = {
    DEFAULT,
    INTEGERS,
    ALGEBRAIC_INTEGERS,
    ALGEBRAIC_INTEGERS_OF_K,
    UNIVARIATE_INTEGER_POLYNOMIALS,
    UNIVARIATE_RATIONAL_POLYNOMIALS,
    CONTINUOUS_FUNCTIONS,
} as const;