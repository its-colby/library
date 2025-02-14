import { Block, Notation as N, Statement } from "$lib/math/tex";
import { COMMUTATIVE_RING_BB } from "$lib/math/structures/rings/commutative";

import { Field } from "./Field";
import { FIELD_BB } from "./declarations";


export const RATIONAL_NUMBERS = new Field({
    declaration: FIELD_BB.RATIONALS,
});

export const REAL_NUMBERS = new Field({
    declaration: FIELD_BB.REALS,
});

export const COMPLEX_NUMBERS = new Field({
    declaration: FIELD_BB.COMPLEX,
});

namespace AlgebraicNumbers {
    const ELEMENT = "a";
    const FUNCTION = "f";
    const PARENT_SET = FIELD_BB.COMPLEX;

    const CONDITIONS = [
        N.there_is(FUNCTION, COMMUTATIVE_RING_BB.UNIVARIATE_POLYNOMIALS),
        N.COMMA,
        N.func_zero(ELEMENT)
    ]

    export const DEFINITION = N.set_definition({
        declaration: FIELD_BB.ALGEBRAIC_NUMBERS,
        element: ELEMENT,
        parent_set: PARENT_SET,
        conditions: CONDITIONS
    })
}

export const ALGEBRAIC_NUMBERS = new Field({
    declaration: FIELD_BB.ALGEBRAIC_NUMBERS,
    definitions: new Block({
        header: {title: "The Algebraic Numbers"},
        statements: [
            new Statement({
                header: AlgebraicNumbers.DEFINITION
            })
        ]
    })
});

export const FIELDS = {
    RATIONAL_NUMBERS,
    REAL_NUMBERS,
    COMPLEX_NUMBERS,
    ALGEBRAIC_NUMBERS,
} as const;