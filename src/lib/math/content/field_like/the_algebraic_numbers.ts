import { Block, Statement, Inline, Content, Tex } from "$lib/math/tex";

const STEP_11 =
`
    a, b \\in \\mathbb{A}
    \\to
    (x - (a+bi))(x - (a-bi)) = x^2 - 2ax + a^2 + b^2
`;

const STEP_12 =
`
    a^2 + b^2 \\in \\mathbb{A}
    \\land
    2a \\in \\mathbb{A}
    \\implies
    a+bi \\in \\mathbb{A}
`;

export const COMPLEX_NUMBERS_ALGEBRAIC = Block.from_proof({
    title: Tex.from_text("Complex Numbers with Algebraic Coefficients"),
    statements: [
        Statement.from_single(new Tex(STEP_11 )),
        Statement.from_single(new Tex(STEP_12))
    ]
});

const TRANSCEDENTAL_DEFINITION =
`
    \\mathbb{T} = \\{ \\enspace 
        \\alpha \\in \\mathbb{C} 
        \\enspace \\mid \\enspace  
        \\alpha \\text{ is not algebraic}
    \\enspace \\}
`;

export const TRANSCEDENTAL_NUMBERS = Block.from_definition({
    title: Tex.from_text("Transcendental Numbers"),
    statements: [
        Statement.from_single(new Tex(TRANSCEDENTAL_DEFINITION))
    ]
});

const AA =
`
    \\mathbb{A} \\text{ is a field}
`;

export const IS_A_FIELD = Block.from_definition({
    title: Tex.from_text("Is A Field"),
    statements: [
        Statement.from_single(new Tex(AA))
    ]
});



// a, b in A, then a + bi in A
// referred to as algebraic closure over Q
// minimal polynomial
// The Algebraic Numbers form a Field
// not every algebraic number can be expressed using radicals.
// basis