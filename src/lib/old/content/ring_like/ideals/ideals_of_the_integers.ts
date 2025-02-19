import { Block, Statement, Tex } from "$lib/math/tex";

const DEFINITION = 
`
    \\mathcal{I} = \\langle n \\rangle = n \\cdot \\mathbb{Z} = \\{ \\enspace 
        n \\cdot k 
        \\enspace \\mid \\enspace 
        k \\in \\mathbb{Z} 
    \\enspace \\}
`

const EXAMPLE_HEADER = 
`
    \\langle 3 \\rangle = 3 \\cdot \\mathbb{Z} = \\{ \\enspace 
        3, \\ 6, \\ 9, \\ 12, \\ \\ldots
    \\enspace \\}
`

const EXAMPLE_CONDITIONS = [
    `
        3 \\cdot 1 = 3 \\enspace \\to \\enspace 3 \\in \\langle 3 \\rangle
    `,
    `
        3 \\cdot 10 = 30 \\enspace \\to \\enspace 30 \\in \\langle 3 \\rangle
    `,
    `
        10 \\cdot 3 = 30 \\enspace \\to \\enspace 30 \\in \\langle 3 \\rangle
    `
]

export const IDEALS_OF_THE_INTEGERS = Block.from_example({
    title: Tex.from_text("Two-Sided Ideals of the Integers"),
    statements: [
        Statement.from_definition(new Tex(DEFINITION)),
        Statement.example_with_conditions({
            example: new Tex(EXAMPLE_HEADER),
            conditions: EXAMPLE_CONDITIONS.map(condition => new Tex(condition))
        })
    ],
});