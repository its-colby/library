import { Block, Statement, Tex } from "$lib/math/tex";

const HEADER = 
`
    \\text{An ideal } \\mathcal{I} \\text{ is principal} \\iff
`

const CONDITION_A = 
`
    \\exists a \\in \\mathcal{R}
    \\enspace , \\enspace
    \\mathcal{I} = \\langle a \\rangle
`

export const PRINCIPAL_IDEAL = Block.from_definition({
    title: Tex.from_text("Principal Ideal"),
    statements: [
        Statement.with_conditions({
            primary: new Tex(HEADER),
            conditions: [
                new Tex(CONDITION_A),
            ]
        })
    ],
});