import { Statement, Block, Tex } from "$lib/math/tex";

const HEADER =
`
    \\mathcal{I} \\text{ is a two-sided ideal of } \\mathcal{R} \\iff
`

const CONDITION_A =
`
    \\mathcal{I} \\text{ is a subrng of } \\mathcal{R}
`;

const CONDITION_B =
`
    \\forall a \\in \\mathcal{I}, \\forall b \\in \\mathcal{R}, a \\cdot b \\in \\mathcal{I}
`;

export const TWO_SIDED_IDEAL = Block.from_definition({
    title: Tex.from_text("Two-Sided Ideal"),
    statements: [
        Statement.with_conditions({
            primary: new Tex(HEADER),
            conditions: [
                new Tex(CONDITION_A),
                new Tex(CONDITION_B)
            ]
        })
    ]
});