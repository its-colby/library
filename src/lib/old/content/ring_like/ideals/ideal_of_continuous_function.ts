import { Block, Statement, Tex } from "$lib/math/tex";

const DEFINITION = 
`
    \\mathcal{I} = \\{ \\enspace 
        f \\in \\mathcal{C}(X) 
        \\enspace \\mid \\enspace 
        f(x) = 0 
        \\enspace , \\enspace
        \\forall x \\in X 
    \\enspace \\}
`

export const IDEAL_OF_CONTINUOUS_FUNCTION = Block.from_example({
    title: Tex.from_text("A Two-Sided Ideal of the Continuous Functions"),
    statements: [
        Statement.from_definition(new Tex(DEFINITION)),
    ],
});