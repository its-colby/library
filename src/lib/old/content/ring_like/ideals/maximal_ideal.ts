import { Block, Statement, Tex } from "$lib/math/tex";

const HEADER = 
`
    \\text{An ideal } \\mathcal{I} \\text{ is maximal} \\iff
`

const CONDITION_A = 
`
    \\mathcal{I} \\neq \\mathcal{R}
`

const CONDITION_B = 
`
    \\mathcal{I} \\subseteq \\mathcal{M} \\subseteq \\mathcal{R}
    \\implies 
    \\mathcal{M} = \\mathcal{I}
    \\enspace || \\enspace 
    \\mathcal{M} = \\mathcal{R}
`

export const MAXIMAL_IDEAL = Block.from_definition({
    title: Tex.from_text("Maximal Ideal"),
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