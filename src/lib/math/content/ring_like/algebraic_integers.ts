import { Block, Statement, Tex } from "$lib/math/tex";

const DEFINITION = 
`
    \\mathcal{O} = \\{ \\enspace 
        a \\in \\mathbb{C} 
        \\enspace \\mid \\enspace 
        \\exists f \\in \\mathbb{Z}[x]
        \\enspace , \\enspace 
        f \\text{ is monic}
        \\enspace \\land \\enspace 
        f(a) = 0 
    \\enspace \\}
`


export const THE_ALGEBRAIC_INTEGERS = Block.from_definition({
    title: Tex.from_text("The Algebraic Integers"),
    statements: [
        Statement.from_single(new Tex(DEFINITION))
    ]
});