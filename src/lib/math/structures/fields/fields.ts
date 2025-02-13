import { type TEX } from "$lib/math/tex";
import { MathematicalSet, LogicalConnective } from "$lib/math/logic";
import { Field } from "./Field";
import { FiniteFieldExtension } from "./FiniteFieldExtension";
import { AlgebraicStructure } from "../utils/Structure";
import { operations } from "$lib/math/operations/instances/operations";

export const rational_numbers = new Field({
    declaration: AlgebraicStructure.bold({letter: "Q"}),
    definitions: [],
    field_operation: operations.multiplication,
    group_operation: operations.addition,
    name: "The Rational Numbers"
});

export const real_numbers = new Field({
    declaration: AlgebraicStructure.bold({letter: "R"}),
    definitions: [],
    field_operation: operations.multiplication,
    group_operation: operations.addition,
    name: "The Real Numbers"
});

export const complex_numbers = new Field({
    declaration: AlgebraicStructure.bold({letter: "C"}),
    definitions: [],
    field_operation: operations.multiplication,
    group_operation: operations.addition,
    name: "The Complex Numbers"
});

export const algebraic_numbers = new Field({
    declaration: AlgebraicStructure.bold({letter: "A"}),
    definitions: [
        MathematicalSet.standard_definition({
            declaration: Field.bold({letter: "A"}),
            element: "a",
            parent_set: complex_numbers.declaration,
            conditions: [
                "\\exists f \\in \\mathbb{Q}[x]" as TEX,
                LogicalConnective.AND,
                "f(a) = 0" as TEX
            ]
        }),
        MathematicalSet.standard_definition({
            declaration: Field.bold({letter: "A"}),
            element: "a",
            parent_set: complex_numbers.declaration,
            conditions: [
                "\\exists f \\in \\mathbb{Z}[x]" as TEX,
                LogicalConnective.AND,
                "f(a) = 0" as TEX
            ]
        }),
    ],
    field_operation: operations.multiplication,
    group_operation: operations.addition,
    name: "The Algebraic Numbers"
});

export const fields = {
    rational_numbers,
    real_numbers,
    complex_numbers,
    algebraic_numbers
} as const;


const adjoin = FiniteFieldExtension.adjoin_elements({
    elements: ["a_1", "a_2", "...", "a_n"] as TEX[],
    base_field: fields.rational_numbers,
});
export const algebraic_number_field = new FiniteFieldExtension({
    declaration: Field.boldF() + " = " + 
        adjoin as TEX,
    definitions: [
        MathematicalSet.standard_definition({
            declaration: Field.boldF(),
            element: "a",
            parent_set: adjoin,
            conditions: [
                `[${Field.boldF()}: ${fields.rational_numbers.declaration}] < \\infty` as TEX
            ]
        }),
    ],
    base_field: fields.rational_numbers,
    field_operation: operations.multiplication,
    group_operation: operations.addition,
    name: "An Algebraic Number Field"
});

export const field_extensions = {
    algebraic_number_field
}