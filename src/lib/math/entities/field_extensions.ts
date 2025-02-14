import { type TEX, Block, Notation as N, Statement } from "$lib/math/tex";
import { FIELD_BB, FiniteFieldExtension, FINITE_FIELD_EXTENSION_BB } from "$lib/math/structures";

import { FIELDS } from "./fields";


namespace AlgebraicNumberField {

    const ELEMENT = "a";

    const PARENT_SET = FiniteFieldExtension.adjoin_declaration({
        elements: ["a_1", "a_2", "...", "a_n"] as TEX[],
        base_field: FIELD_BB.RATIONALS,
    });

    const CONDITIONS = [
        `[${FINITE_FIELD_EXTENSION_BB.ALGEBRAIC_NUMBERS}: ${FIELD_BB.RATIONALS}] < ${N.INFINITY}` as TEX
    ]

    export const DEFINITION = N.set_definition({
        declaration: FINITE_FIELD_EXTENSION_BB.ALGEBRAIC_NUMBERS,
        element: ELEMENT,
        parent_set: PARENT_SET,
        conditions: CONDITIONS
    })
}


export const ALGEBRAIC_NUMBER_FIELD = new FiniteFieldExtension({
    declaration: FINITE_FIELD_EXTENSION_BB.ALGEBRAIC_NUMBERS,
    definitions: new Block({
        header: {title: "An Algebraic Number Field"},
        statements: [
            new Statement({
                header: AlgebraicNumberField.DEFINITION
            })
        ]
    }),
    base_field: FIELDS.RATIONAL_NUMBERS,
});

export const FIELD_EXTENSIONS = {
    ALGEBRAIC_NUMBER_FIELD
} as const;