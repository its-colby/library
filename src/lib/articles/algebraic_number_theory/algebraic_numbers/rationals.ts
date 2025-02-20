import { Block, OneLineStatement, Inline, Section, Tex, Title } from "$lib/tex";

const PARAGRAPH_1 = new Inline([
    `Henceforth, the adjective 'algebraic' will denote whether or not a number is an algebraic number.`
]);

const PARAGRAPH_2 = new Inline([
    `We know from experience that `, new Tex("\\sqrt{2}"), `, `, new Tex("i"), `, and `, new Tex("9"), ` are algebraic. But what does the set of algebraic numbers look like as a whole? Are all rational numbers algebraic? Which complex numbers aren't? To answer these questions, we will examine sets of numbers we suspect to be algebraic, like the rationals and integers, and attempt to construct univariate polynomials with rational coefficients that have them as solutions. Success indicates the number is algebraic; failure indicates it is not.`
]);

const PARAGRAPH_3 = new Inline([
    `All rational numbers can be represented as a proportion of two integers. All one simply has to do is set this fraction equal to `, new Tex("x"), `, and attempt to rearrange and get 0 on one-side. This can be seen in 2.2.1 as an example, and 2.2.2 as a general statement.`
]);

const PARAGRAPH_4 = new Inline([
    `Since all integers are rational and all natural numbers are integers, these familiar sets are all subsets of the algebraic numbers, as represented in 2.2.3.`
]);


const RATIONALS_ARE_ALGEBRAIC =
`
    \\forall \\frac{a}{b} \\in \\mathbb{Q}
    \\enspace \\to \\enspace
    bx - a = 0 \\implies
    \\frac{a}{b} \\text{ is algebraic}
`;

const RATIONALS_EXAMPLE =
`
    \\frac{7}{9} 
    \\enspace \\to \\enspace 
    x = \\frac{7}{9}
    \\enspace \\to \\enspace
    9x = 7
    \\enspace \\to \\enspace
    9x - 7 = 0
`;

const INTEGERS_ARE_ALGEBRAIC =
`
    \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{A}
`;

const BLOCK = Block.from_proof({
    title: Tex.from_text("The Rationals are Algebraic"),
    statements: [
        new OneLineStatement({ value: new Tex(RATIONALS_EXAMPLE) }),
        new OneLineStatement({ value: new Tex(RATIONALS_ARE_ALGEBRAIC) }),
        new OneLineStatement({ value: new Tex(INTEGERS_ARE_ALGEBRAIC) })
    ]
});

export const RATIONALS_SECTION = new Section({
    title: new Title({
        inline: new Inline([
            "The Rationals are Algebraic",
        ]),
    }),
    content: [
        PARAGRAPH_1,
        PARAGRAPH_2,
        PARAGRAPH_3,
        PARAGRAPH_4,
        BLOCK
    ]
})