
    // Z[theta] is a subring (sometimes proper) of O_K all algebraic integers which is subring of Q(theta)

    // unit, irreducible


import { Block, Statement, Tex } from "$lib/math/tex";


const INTEGRAL_DOMAIN_DEFINITION = 
`
    \\mathcal{R} \\text{ is a commutative ring, satisfying }
`

const INTEGRAL_DOMAIN_CONDITION_A = 
`
    \\forall a, b \\in \\mathcal{R}
    \\enspace , \\enspace
    a \\cdot b = 0 
    \\implies 
    a = 0 
    \\enspace || \\enspace 
    b = 0
`

export const INTEGRAL_DOMAIN = Block.from_definition({
    title: Tex.from_text("An Integral Domain"),
    statements: [
        Statement.with_conditions({
            primary: new Tex(INTEGRAL_DOMAIN_DEFINITION),
            conditions: [
                new Tex(INTEGRAL_DOMAIN_CONDITION_A)
            ]
        })
    ]
});

const NOETHERIAN_RING_DEFINITION = 
`
    \\forall \\mathcal{I} \\subseteq \\mathcal{R}
    \\enspace , \\enspace
    \\exists a_1, a_2, \\cdots, a_n \\in \\mathcal{R}
    \\text{ such that }
    \\mathcal{I} = \\langle a_1, a_2, \\cdots, a_n \\rangle
`;

export const NOETHERIAN_RING = Block.from_definition({
    title: Tex.from_text("A Noetherian Ring"),
    statements: [
        Statement.from_single(new Tex(NOETHERIAN_RING_DEFINITION))
    ]
});

const DEDEKIND_DOMAIN_DEFINITION = 
`
    \\text{Is an integral domain and every non-zero proper ideal can be uniquely factored into a product of prime ideals.}
`

export const DEDEKIND_DOMAIN = Block.from_definition({
    title: Tex.from_text("A Dedekind Domain"),
    statements: [
        Statement.from_single(new Tex(DEDEKIND_DOMAIN_DEFINITION))
    ]
});

const UNIT_DEFINITION = 
`
    \\text{An element } u \\text{ is a unit} \\iff
    \\exists v \\in \\mathcal{R}
    \\text{ such that }
    u \\cdot v = 1
`

export const UNIT = Block.from_definition({
    title: Tex.from_text("A Unit"),
    statements: [
        Statement.from_single(new Tex(UNIT_DEFINITION))
    ]
});

const IRREDUCIBLE_ELEMENT_DEFINITION = 
`
    \\text{An element } p \\text{ in an integral domain } \\mathcal{R} \\text{ is irreducible} \\iff
`;

const IRREDUCIBLE_ELEMENT_CONDITION_A = 
`
    p \\neq 0 \\text{ and } p \\text{ is not a unit}
`;

const IRREDUCIBLE_ELEMENT_CONDITION_B = 
`
    \\text{if } p = a \\cdot b \\text{, then } a \\text{ or } b \\text{ is a unit.}
`;


export const IRREDUCIBLE_ELEMENT = Block.from_definition({
    title: Tex.from_text("An Irreducible Element"),
    statements: [
        Statement.with_conditions({
            primary: new Tex(IRREDUCIBLE_ELEMENT_DEFINITION),
            conditions: [
                new Tex(IRREDUCIBLE_ELEMENT_CONDITION_A),
                new Tex(IRREDUCIBLE_ELEMENT_CONDITION_B)
            ]
        })
    ]
});


const UNIQUE_FACTORIZATION_DOMAIN_DEFINITION = 
`
    \\text{Is an integral domain and every non-zero element (except units) can be uniquely factored into a product of irreducible elements.}
`

export const UNIQUE_FACTORIZATION_DOMAIN = Block.from_definition({
    title: Tex.from_text("A Unique Factorization Domain"),
    statements: [
        Statement.from_single(new Tex(UNIQUE_FACTORIZATION_DOMAIN_DEFINITION))
    ]
});

const EUCLIDEAN_DOMAIN_DEFINITION = 
`
    \\text{Is an integral domain and there exists a function } f \\text{ such that for any } a, b \\in \\mathcal{R}
    \\text{ with } b \\neq 0 \\text{, there exist } q, r \\in \\mathcal{R} \\text{ such that } a = b \\cdot q + r \\text{ and } f(r) < f(b).
`

export const EUCLIDEAN_DOMAIN = Block.from_definition({
    title: Tex.from_text("A Euclidean Domain"),
    statements: [
        Statement.from_single(new Tex(EUCLIDEAN_DOMAIN_DEFINITION))
    ]
});

const GCD_DOMAIN_DEFINITION = 
`
    \\text{Is an integral domain and } \\exists \\text{ a gcd} d \\text{ such that if } d \\text{ divides } a \\text{ and } b \\text{and if } c \\text{ divides } a \\text{ and } b \\text{, then } c \\text{ divides } d \\text{. }
`

export const GCD_DOMAIN = Block.from_definition({
    title: Tex.from_text("A GCD Domain"),
    statements: [
        Statement.from_single(new Tex(GCD_DOMAIN_DEFINITION))
    ]
});




const GALOIS_THEORETIC_NORM_DEFINITION = 
`
    N_{K / F} (\\alpha) = \\displaystyle \\prod_{\\sigma \\in \\text{Gal}(K / F)} \\sigma(\\alpha)
`

export const GALOIS_THEORETIC_NORM = Block.from_definition({
    title: Tex.from_text("A Galois-Theoretic Norm"),
    statements: [
        Statement.from_single(new Tex(GALOIS_THEORETIC_NORM_DEFINITION))
    ]
});

const NORM_OF_IDEAL_DEFINITION = 
`
    N(I) = | \\mathcal{R} / I |
`

export const NORM_OF_IDEAL = Block.from_definition({
    title: Tex.from_text("A Norm of an Ideal"),
    statements: [
        Statement.from_single(new Tex(NORM_OF_IDEAL_DEFINITION))
    ]
});

const QUOTIENT_RING_DEFINITION = 
`
    \\mathcal{R} / I = \\{ a + I \\mid a \\in \\mathcal{R} \\}
`

export const QUOTIENT_RING = Block.from_definition({
    title: Tex.from_text("A Quotient Ring"),
    statements: [
        Statement.from_single(new Tex(QUOTIENT_RING_DEFINITION))
    ]
});
