import { Block, Statement, Tex } from "$lib/math/tex";

const DEFINITION = 
`
    \\mathcal{O} = \\{ a \\in \\mathbb{C} \\mid \\exists f \\in \\mathbb{Z}[x], \\text{f is monic and } f(a) = 0 \\}
`


export const THE_ALGEBRAIC_INTEGERS = Block.from_definition({
    title: Tex.from_text("The Algebraic Integers"),
    statements: [
        Statement.from_single(new Tex(DEFINITION))
    ]
});