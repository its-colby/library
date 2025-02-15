import { Block, Statement, Tex } from "$lib/math/tex";

const DEFINITION = 
`
    \\mathbb{K} = \\{ \\enspace 
        a \\in \\mathbb{Q}(a_1, \\ \\ldots, \\ a_\\text{n}) 
        \\enspace \\mid \\enspace
        [\\mathbb{K} : \\mathbb{Q}] < \\infty 
    \\enspace \\}
`

export const AN_ALGEBRAIC_NUMBER_FIELD = Block.from_definition({
    title: Tex.from_text("An Algebraic Number Field"),
    statements: [
        Statement.from_single(new Tex(DEFINITION))
    ]
});