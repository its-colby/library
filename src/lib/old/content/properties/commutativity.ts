import { Block, Statement, Tex } from "$lib/math/tex";

const DEFINITION =
`
    a \\cdot b = b \\cdot a
`

export const COMMUTATIVITY = Block.from_definition({
    title: Tex.from_text("Commutative Property"),
    statements: [
        Statement.from_single(new Tex(DEFINITION))
    ]
});
