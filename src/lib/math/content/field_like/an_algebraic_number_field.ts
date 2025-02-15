import { Block, Statement, Tex } from "$lib/math/tex";

const DEFINITION = 
`
    K = \\{ a \\in \\mathbb{Q}(a_1, a_2, \\ldots, a_n) \\mid [K : \\mathbb{Q}] < \\infty \\}
`

export const AN_ALGEBRAIC_NUMBER_FIELD = Block.from_definition({
    title: Tex.from_text("An Algebraic Number Field"),
    statements: [
        Statement.from_single(new Tex(DEFINITION))
    ]
});