import { Block, Statement, Tex } from "$lib/math/tex";


const DEFINITION = 
`
    \\mathcal{C}(X)= \\{ f : X \\to \\mathbb{R} \\mid f \\text{ is continuous} \\}
`


export const CONTINUOUS_FUNCTIONS = Block.from_definition({
    title: Tex.from_text("The Continuous Functions"),
    statements: [
        Statement.from_single(new Tex(DEFINITION))
    ]
});