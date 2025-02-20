import { Block, OneLineStatement, Inline, Section, Tex, Title } from "$lib/tex";

const PARAGRAPH_1 = new Inline([
    `Number theory explores the properties of various sets of numbers, such as the natural numbers `, new Tex("\\mathbb{N}"), `, integers `, new Tex("\\mathbb{Z}"), `, rational numbers `, new Tex("\\mathbb{Q}"), `, real numbers `, new Tex("\\mathbb{R}"), `, and complex numbers `, new Tex("\\mathbb{C}"), `.`
]);

const PARAGRAPH_2 = new Inline([
    `Solving univariate (single-variable) polynomial equations is one of the most fundamental aspects of mathematics. Polynomials with rational coefficients, such as `, new Tex("2x^2 + \\frac{1}{3}x - 5"), `, are common, while those with irrational coefficients, like `, new Tex("\\sqrt{2}x^2 + \\pi x - 1"), `, are rare. We say a polynomial with rational coefficients is 'defined over the rationals', or equivalently, the polynomial is 'an element of `, new Tex("\\mathbb{Q}[x]"), `'. See 2.1.1 for a formal definition.`
]);

const PARAGRAPH_3 = new Inline([
    `Consider the solutions of a univariate polynomial equation with rational coefficients. These solutions are not integers or rationals, as shown by `, new Tex("x = \\sqrt{2}"), ` in `, new Tex("x^2 = 2"), `. Moreover, `, new Tex("\\pi"), ` as one mathematician proved, is never a solution, indicating these solutions are also distinct from the real and complex numbers. As a result, we call this distinct set of numbers, the algebraic numbers, denoted as `, new Tex("\\mathbb{A}"), `. See 2.1.2 for a formal definition.`
]);

const PARAGRAPH_4 = new Inline([
    `When set to 0, any polynomial in `, new Tex("\\mathbb{Q}[x]"), ` can be transformed to a polynomial in `, new Tex("\\mathbb{Z}[x]"), `. Simply multiply both sides by the least common multiple of the denominators of the coefficients. See 2.1.3 for an example. Thus, the definition in 2.1.2 simplifies to 2.1.4.`
]);


const Q_X = 
`
    \\mathbb{Q}[x] = \\{ \\enspace 
        a_nx^n + \\cdots + a_1x + a_0
        \\enspace \\mid \\enspace 
        a_i \\in \\mathbb{Q}
    \\enspace \\}
`;

const WITH_Q_X = 
`
    \\mathbb{A} = \\{ \\enspace 
        \\alpha \\in \\mathbb{C} 
        \\enspace \\mid \\enspace  
        \\exists f \\in \\mathbb{Q}[x]
        \\enspace , \\enspace 
        f(\\alpha) = 0
    \\enspace \\}
`;

const Q_X_TO_Z_X = 
`
    \\frac{3}{4}x^3 + \\frac{2}{5}x^2 - 7
    = 0
    \\implies 
    0 \\cdot 20 = 15x^3 + 8x^2 - 140
`;

const WITH_Z_X = 
`
    \\mathbb{A} = \\{ \\enspace 
        \\alpha \\in \\mathbb{C} 
        \\enspace \\mid \\enspace  
        \\exists f \\in \\mathbb{Z}[x]
        \\enspace , \\enspace 
        f(\\alpha) = 0
    \\enspace \\}
`;

const BLOCK = Block.from_definition({
    title: Tex.from_text("The Algebraic Numbers"),
    statements: [
        new OneLineStatement({ value: new Tex(Q_X) }),
        new OneLineStatement({ value: new Tex(WITH_Q_X) }),
        new OneLineStatement({ value: new Tex(Q_X_TO_Z_X) }),
        new OneLineStatement({ value: new Tex(WITH_Z_X) })
    ]
});

export const DEFINITION_SECTION = new Section({
    title: new Title({
        inline: new Inline([
            "Defining the Algebraic Numbers",
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