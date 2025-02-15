import { Block, Statement, Tex } from "$lib/math/tex";

const DEFINITION =
`
    a \\cdot i = i \\cdot a = a
`

export const TWO_SIDED_IDENTITY = Block.from_definition({
    title: Tex.from_text("Two-Sided Identity"),
    statements: [
        Statement.from_single(new Tex(DEFINITION))
    ]
});