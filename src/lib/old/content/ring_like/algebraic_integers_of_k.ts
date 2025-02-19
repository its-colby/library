import { Block, Statement, Tex } from "$lib/math/tex";

const DEFINITION = 
`
    \\mathcal{O}_\\mathbb{K} = \\{ \\enspace 
        a \\in \\mathbb{K} 
        \\enspace \\mid \\enspace 
        \\exists f \\in \\mathbb{Z}[x]
        \\enspace , \\enspace 
        f \\text{ is monic}
        \\enspace \\land \\enspace 
        f(a) = 0 
    \\enspace \\}
`
const DEFINITION2 = 
`
    \\mathcal{O}_\\mathbb{K} = \\mathcal{O} \\cap \\mathbb{K}
`

export const ALGEBRAIC_INTEGERS_OF_K = Block.from_definition({
    title: Tex.from_text("An Algebraic Integer Ring"),
    statements: [
        Statement.from_definition(new Tex(DEFINITION)),
        Statement.from_definition(new Tex(DEFINITION2))
    ]
});