import { Block, Inline, Section, Tex, Title } from "$lib/tex";

const P1 = Block.from_multiple_statements([
    new Tex(`\\text{Polynomial: }x^n - 1 = 0`),
    new Tex(`\\zeta_n = e^{2\\pi i / n}`),
    new Tex(`\\text{Solutions: } \\{ \\zeta_n, \\zeta_n^2, \\ldots, \\zeta_n^n \\}`)
])

const P2 = Block.from_multiple_statements([
    new Tex(`\\text{Linear Factors: } (x - \\sqrt{d})(x + \\sqrt{d})`),
    new Tex(`\\text{Splitting Field: } \\mathbb{Q}(\\sqrt{d})`),
]);

const P3 = Block.from_multiple_statements([
    new Tex(`\\text{Extension Element:} \\enspace \\alpha 
        \\ | \\  
        \\alpha \\in \\{ \\zeta_n, \\zeta_n^2, \\ldots, \\zeta_n^n \\}`),
    new Tex(`\\text{Base Element:} \\enspace \\beta 
        \\ | \\  
        \\beta \\in \\mathbb{Q}`),
])

const P4 = Block.from_multiple_statements([
    new Tex(`\\text{Identity Automorphism:} \\enspace e:
        \\alpha \\mapsto \\alpha
        \\enspace , \\enspace
        \\beta \\mapsto \\beta
    `),
])


const P5 = Block.from_multiple_statements([
    new Tex(`\\text{n-Cycle Rotation Automorphism:} \\enspace \\sigma_k:
        \\zeta_n^k \\mapsto \\zeta_n^{k+1} for k \\in \\{1, 2, \\ldots, n-1\\}
        \\enspace , \\enspace
        \\beta \\mapsto \\beta
    `),
    new Tex(`\\sigma_1^{n-1} = \\sigma_1 \\circ \\sigma_1 \\circ \\cdots \\circ \\sigma_1 = e`),
])

const P7 = Block.from_multiple_statements([
    new Tex(`\\text{Automorphism Group:} \\enspace \\{e, \\sigma_1, \\sigma_2, \\ldots, \\sigma_{n-1}\\}`),
])

// splitting field
// minimal polynomial
// normal extension
// separable
// galois extension
// cyclotomoic
// solvable
// non-solvable

export const GENERALIZATION = new Section({
    title: new Title({
        value: "Generalization",
    }),
    content: [
        P1,
        P2,
        P3,
        P4,
        P5,
        P7,
    ]
})
