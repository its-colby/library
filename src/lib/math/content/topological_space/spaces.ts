import { Tex, Block, Statement } from "$lib/math/tex";


const METRIC_SPACE_HEADER =
`
    \\exists d : X \\times X \\to \\mathbb{R}
    \\enspace , \\enspace
    \\forall x,y,z \\in X
    \\enspace
    \\text{satisfying}
`;

const METRIC_SPACE_CONDITION_A =
`
    d(x, y) \\geq 0
`;

const METRIC_SPACE_CONDITION_B =
`
    d(x, y) = 0 \\iff x = y
`;

const METRIC_SPACE_CONDITION_C =
`
    d(x, y) = d(y, x)
`;

const METRIC_SPACE_CONDITION_D =
`
    d(x, z) \\leq d(x, y) + d(y, z)
`;

export const METRIC_SPACE = Block.from_definition({
    title: Tex.from_text("Metric Space"),
    statements: [
        Statement.with_conditions({
            primary: new Tex(METRIC_SPACE_HEADER),
            conditions: [
                new Tex(METRIC_SPACE_CONDITION_A),
                new Tex(METRIC_SPACE_CONDITION_B),
                new Tex(METRIC_SPACE_CONDITION_C),
                new Tex(METRIC_SPACE_CONDITION_D),
            ],
        }),
    ],
});


const HEADER = 
`
    \\exists \\mathcal{T} \\subseteq \\mathcal{P}(X)
    \\enspace \\text{satisfying}
`;

const CONDITION_A = 
`
    \\emptyset \\in \\mathcal{T} 
    \\enspace \\land \\enspace 
    X \\in \\mathcal{T}
`;

const CONDITION_B = 
`
    \\{ S_i \\}_{i \\in I} \\subseteq \\mathcal{T}
    \\enspace \\ \\implies \\ \\enspace
    \\displaystyle \\bigcup_{i \\ \\in \\ I} S_i \\ \\in \\mathcal{T}
`;

const CONDITION_C =
`
    \\forall n \\in \\mathbb{N}
    \\enspace , \\enspace
    \\{ S_i \\}_{i=1}^{n} \\subseteq \\mathcal{T}
    \\enspace \\implies \\enspace
    \\displaystyle \\bigcap_{i=1}^{n} S_i \\ \\in \\mathcal{T}
`


export const TOPOLOGICAL_SPACE = Block.from_definition({
    title: Tex.from_text("Topological Space"),
    statements: [
        Statement.with_conditions({
            primary: new Tex(HEADER),
            conditions: [
                new Tex(CONDITION_A),
                new Tex(CONDITION_B),
                new Tex(CONDITION_C),
            ],
        }),
    ],
});


const HEADER3 =
`
    \\text{There exists a topology } \\mathcal{T} \\text{ satisfying }
`;

const CONDITION_AA =
`
    \\forall x,y \\in X
    \\enspace , \\enspace
    x \\neq y
    \\implies
    \\exists U_x, U_y \\in \\mathcal{T}
    \\enspace , \\enspace
    x \\in U_x 
    \\enspace \\land \\enspace 
    y \\in U_y 
    \\enspace , \\enspace 
    U_x \\cap U_y = \\emptyset
`;

export const HAUSDORFF_SPACE = Block.from_definition({
    title: Tex.from_text("Hausdorff Space"),
    statements: [
        Statement.with_conditions({
            primary: new Tex(HEADER3),
            conditions: [
                new Tex(CONDITION_AA),
            ],
        }),
    ],
});

const HEADER4 =
`
    \\text{There exists a topology } \\mathcal{T} \\text{ satisfying }
`;

const CONDITION_AAA =
`
    \\mathcal{T} \\enspace \\text{is Hausdorff}
`;

const CONDITION_AAB =
`
    \\mathcal{T} \\enspace \\text{has a countable basis}
`;

const CONDITION_AAC =
`
    \\forall x \\in X
    \\enspace , \\enspace
    \\exists U \\in \\mathcal{T}
    \\enspace , \\enspace
    x \\in U
    \\enspace , \\enspace
    U \\subset \\mathbb{R}^n
`;

export const N_MANIFOLDS = Block.from_definition({
    title: Tex.from_text("N-Manifold"),
    statements: [
        Statement.with_conditions({
            primary: new Tex(HEADER4),
            conditions: [
                new Tex(CONDITION_AAA),
                new Tex(CONDITION_AAB),
                new Tex(CONDITION_AAC),
            ],
        }),
    ],
});

// uniform space, measure space, manifolds, affine spaces, euclidean spaces, vector spaces, projective spaces