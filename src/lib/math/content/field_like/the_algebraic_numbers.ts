import { Block, Statement, Tex } from "$lib/math/tex";


const DEFINITION = 
`
    \\mathbb{A} = \\{ a \\in \\mathbb{C} \\mid \\exists f \\in \\mathbb{Q}[x], f(a) = 0 \\}
`

export const THE_ALGEBRAIC_NUMBERS = Block.from_definition({
    title: Tex.from_text("The Algebraic Numbers"),
    statements: [
        Statement.from_single(new Tex(DEFINITION))
    ]
});
