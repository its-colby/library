import { Block, Statement, Tex } from "$lib/math/tex";


const DEFINITION =
`
    a \\cdot (b + c) = a \\cdot b + a \\cdot c
`

export const DISTRIBUTIVITY = Block.from_definition({
    title: Tex.from_text("Distributive Property"),
    statements: [
        Statement.from_single(new Tex(DEFINITION))
    ]
});