import { Block, Notation as N, Statement } from "$lib/math/tex";

import { FIELD_BB, FINITE_FIELD_EXTENSION_BB, COMMUTATIVE_RING_BB, CommutativeRing} from "$lib/math/structures";


export const INTEGERS = new CommutativeRing({
    declaration: COMMUTATIVE_RING_BB.INTEGERS,
});

namespace AlgebraicIntegers {
    const ELEMENT = "a";
    const FUNCTION = "f";
    const PARENT_SET = FIELD_BB.COMPLEX;

    const CONDITIONS = [
        N.there_is(FUNCTION, COMMUTATIVE_RING_BB.UNIVARIATE_POLYNOMIALS),
        N.COMMA,
        N.concat([FUNCTION, N.text(" is monic")]),
        N.AND,
        N.func_zero(ELEMENT)
    ]

    export const DEFINITION = N.set_definition({
        declaration: COMMUTATIVE_RING_BB.ALGEBRAIC_INTEGERS,
        element: ELEMENT,
        parent_set: PARENT_SET,
        conditions: CONDITIONS
    })

    const K_PARENT = FINITE_FIELD_EXTENSION_BB.ALGEBRAIC_NUMBERS;


    export const OF_K_DEFINITION = N.set_definition({
        declaration: COMMUTATIVE_RING_BB.ALGEBRAIC_INTEGERS_OF_K,
        element: ELEMENT,
        parent_set: K_PARENT,
        conditions: CONDITIONS
    })

    export const OF_K_DEFINITION_2 = N.equivalent(
        COMMUTATIVE_RING_BB.ALGEBRAIC_INTEGERS_OF_K, 
        N.intersect(
            COMMUTATIVE_RING_BB.ALGEBRAIC_INTEGERS, 
            FINITE_FIELD_EXTENSION_BB.ALGEBRAIC_NUMBERS
        )
    )
}


export const ALGEBRAIC_INTEGERS = new CommutativeRing({
    declaration: COMMUTATIVE_RING_BB.ALGEBRAIC_INTEGERS,
    definitions: new Block({
        header: {title: "The Algebraic Integers"},
        statements: [
            new Statement({
                header: AlgebraicIntegers.DEFINITION
            })
        ]
    }),
});

export const ALGEBRAIC_INTEGERS_OF_K = new CommutativeRing({
    declaration: COMMUTATIVE_RING_BB.ALGEBRAIC_INTEGERS_OF_K,
    definitions: new Block({
        header: {title: "An Algebraic Integer Ring"},
        statements: [
            new Statement({
                header: AlgebraicIntegers.OF_K_DEFINITION
            }),
            new Statement({
                header: AlgebraicIntegers.OF_K_DEFINITION_2
            })
        ]
    }),
});

export const COMMUTATIVE_RINGS = {
    INTEGERS,
    ALGEBRAIC_INTEGERS,
    ALGEBRAIC_INTEGERS_OF_K
}