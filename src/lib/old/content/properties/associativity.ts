import { Block, Statement, Tex } from "$lib/math/tex";

const DEFINITION =
`
    a \\cdot (b \\cdot c) = (a \\cdot b) \\cdot c
`

export const ASSOCIATIVITY = Block.from_definition({
    title: Tex.from_text("Associative Property"),
    statements: [
        Statement.from_single(new Tex(DEFINITION))
    ]
});