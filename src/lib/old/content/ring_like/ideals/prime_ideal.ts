import { Block, Statement, Tex } from "$lib/math/tex";

const HEADER = 
`
    \\text{An ideal } \\mathcal{I} \\text{ of a commutative ring } \\mathcal{R} \\text{ is prime} \\iff
`

const CONDITION_A = 
`
    \\mathcal{I} \\neq \\mathcal{R}
`

const CONDITION_B = 
`
    \\forall a, b \\in \\mathcal{R}
    \\enspace , \\enspace
    a \\cdot b \\in \\mathcal{I}
    \\implies 
    a \\in \\mathcal{I}
    \\enspace || \\enspace 
    b \\in \\mathcal{I}
`

export const PRIME_IDEAL = Block.from_definition({
    title: Tex.from_text("Prime Ideal"),
    statements: [
        Statement.with_conditions({
            primary: new Tex(HEADER),
            conditions: [
                new Tex(CONDITION_A),
                new Tex(CONDITION_B)
            ]
        })
    ],
});