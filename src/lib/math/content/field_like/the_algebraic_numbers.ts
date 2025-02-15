import { Block, Statement, Tex } from "$lib/math/tex";


const DEFINITION = 
`
    \\mathbb{A} = \\{ \\enspace 
        a \\in \\mathbb{C} 
        \\enspace \\mid \\enspace  
        \\exists f \\in \\mathbb{Q}[x]
        \\enspace , \\enspace 
        f(a) = 0
    \\enspace \\}
`

export const THE_ALGEBRAIC_NUMBERS = Block.from_definition({
    title: Tex.from_text("The Algebraic Numbers"),
    statements: [
        Statement.from_single(new Tex(DEFINITION))
    ]
});
