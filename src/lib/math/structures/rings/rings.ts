import { type TEX } from "$lib/math/tex";
import { AlgebraicStructure } from "../utils/Structure";
import { fields } from "../fields/fields";
import { Field } from "../fields/Field";
import { MathematicalSet, LogicalConnective } from "$lib/math/logic";
import { operations } from "$lib/math/operations/instances/operations";
import { CommutativeRing } from "./CommutativeRing";


export const integers = new CommutativeRing({
    declaration: AlgebraicStructure.bold({letter: "Z"}),
    definitions: [],
    ring_operation: operations.multiplication,
    group_operation: operations.addition,
    name: "The Integers"
});

export const algebraic_integers = new CommutativeRing({
    declaration: AlgebraicStructure.bold({letter: "B"}),
    definitions: [
        MathematicalSet.standard_definition({
            declaration: AlgebraicStructure.bold({letter: "B"}),
            element: "b",
            parent_set: fields.complex_numbers.declaration,
            conditions: [
                "\\exists f \\in \\mathbb{Z}[x]" as TEX,
                LogicalConnective.AND,
                "f \\text{ is monic}" as TEX,
                LogicalConnective.AND,
                "f(b) = 0" as TEX
            ]
        }),
    ],
    ring_operation: operations.multiplication,
    group_operation: operations.addition,
    name: "The Algebraic Integers"
});

const integer_ring_declaration = AlgebraicStructure.bold({letter: "B", sub: Field.boldF({})})

export const integer_ring = new CommutativeRing({
    declaration: integer_ring_declaration,
    definitions: [
        MathematicalSet.standard_definition({
            declaration: integer_ring_declaration,
            element: "b",
            parent_set: Field.boldF({}),
            conditions: [
                "\\exists f \\in \\mathbb{Z}[x]" as TEX,
                LogicalConnective.AND,
                "f \\text{ is monic}" as TEX,
                LogicalConnective.AND,
                "f(b) = 0" as TEX
            ]
        }),
        `${integer_ring_declaration} = ${algebraic_integers.declaration} \\cap ${Field.boldF({})}` as TEX,
    ],
    ring_operation: operations.multiplication,
    group_operation: operations.addition,
    name: "A Ring of Algebraic Integers Within An Algebraic Number Field"
});

export const rings = {
    integers,
    algebraic_integers,
    integer_ring
}