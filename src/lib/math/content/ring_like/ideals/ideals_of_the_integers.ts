import { Block, Statement, Tex } from "$lib/math/tex";

const DEFINITION = 
`
    (n) = n\\mathbb{Z} = \\{ n \\cdot k \\mid k \\in \\mathbb{Z} \\}
`

export const IDEALS_OF_THE_INTEGERS = Block.from_example({
    title: Tex.from_text("Ideals of the Integers"),
    statements: [
        Statement.from_single(new Tex(DEFINITION))
    ],
});