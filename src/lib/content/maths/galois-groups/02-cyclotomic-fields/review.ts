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
        \\alpha \\in \\{
        \\sqrt{d}, -\\sqrt{d}
        \\}`),
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
    new Tex(`\\text{Conjugation Automorphism:} \\enspace \\sigma:
        \\alpha \\mapsto -\\alpha
        \\enspace , \\enspace
        \\beta \\mapsto \\beta
    `),
])

const P6 = Block.from_multiple_statements([
    new Tex(`\\sigma^2 = \\sigma \\circ \\sigma = e`),
    new Tex(`\\text{Conjugation} \\equiv \\text{2-Cycle Rotation}`)
])

const P7 = Block.from_multiple_statements([
    new Tex(`\\text{Automorphism Group:} \\enspace \\{e, \\sigma\\}`),
])

// splitting field
// minimal polynomial
// normal extension
// separable
// galois extension
// cyclotomoic
// solvable
// non-solvable

export const REVIEW = new Section({
    title: new Title({
        value: "Review",
    }),
    content: [
        P1,
        P2,
        P3,
        P4,
        P5,
        P6,
        P7,
    ]
})
