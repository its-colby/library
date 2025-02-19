




// space, metric space, eucliedean space, topological space, discrete topology, manifolds, kolmogorov, hausdorff, compact spaces, locally compact spaces, connected spaces, path-connected spaces, homeomorphisms, homotopies, Zariski topology, The Sierpiński space, Understanding Spaces Without a Distance Function, Generalizing Convergence and Limits, Unifying Different Notions of Continuity, topologgical closure, spectrum of the ring, hausdorff

import { Tex, Block, Statement } from "$lib/math/tex";

// discrete metric space

const DEFINITION =
`
    X = \\{0, 1\\}
    \\enspace , \\enspace
    \\mathcal{T} = \\{\\  \\emptyset, \\ \\{0\\}, \\ \\{0, 1\\} \\ \\}
`;

export const THE_SIERPINSKI_SPACE = Block.from_definition({
    title: Tex.from_text("The Sierpiński Space"),
    statements: [
        Statement.from_definition(new Tex(DEFINITION)),
    ],
});



// varieties, sheafs, affine spaces, projective coords, homogenous, schemes, line bundles, torsion, Hilbert's Nullstellensatz 

const DEFINITION_AFFINE_VARIETY =
`
    V(\\mathcal{I}) = \\{ p \\in k^n \\mid f(p) = 0 \\ \\forall f \\in \\mathcal{I} \\} \\text{ where } \\mathcal{I} \\text{ is an ideal in } k[x_1, \\dots, x_n]
`;

export const AFFINE_VARIETY = Block.from_definition({
    title: Tex.from_text("Affine Variety"),
    statements: [
        Statement.from_definition(new Tex(DEFINITION_AFFINE_VARIETY)),
    ],
});


const DEFINITION_PROJECTIVE_VARIETY =
`
    V(\\mathcal{I}) = \\{ p \\in \\mathbb{P}^n(k) \\mid f(p) = 0 \\ \\forall f \\in \\mathcal{I} \\} \\text{ where } \\mathcal{I} \\text{ is an ideal in } k[x_0, \\dots, x_n]
`;

export const PROJECTIVE_VARIETY = Block.from_definition({
    title: Tex.from_text("Projective Variety"),
    statements: [
        Statement.from_definition(new Tex(DEFINITION_PROJECTIVE_VARIETY)),
    ],
});


const DEFINITION_ZARISKI =
`
    X = \\mathbb{F}^n
`;

export const ZARISKI_TOPOLOGY = Block.from_definition({
    title: Tex.from_text("Zariski Topology"),
    statements: [
        Statement.from_definition(new Tex(DEFINITION_ZARISKI)),
    ],
});



// euclidean space is metric space with the euclidean metric, what about origin?

// 