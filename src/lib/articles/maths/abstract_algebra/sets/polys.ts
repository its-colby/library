import { Inline, Section, Title, Tex, Block, List, InlineWrapper } from "$lib/tex";

const P1 = new Inline([
    `Sets of functions are almost equally as common as sets of numbers in abstract algebra. Lets review the definition of a function first.`,
]);

const P2 = new Block({
    statements: [
        new InlineWrapper({inline: new Inline([
            `A function is a relation that assigns to each element of a set exactly one element of another set.`,
        ])}),
    ],
});

const P3 = new Inline([
    `Functions are commonly denoted by `, new Tex(`f: X \\to Y`), `, which means that `, new Tex(`f`), ` is a function that maps each element of the set `, new Tex(`X`), ` to exactly one element of the set `, new Tex(`Y`), `.`,
])

const P4 = new Inline([
    `The most common type of function in abstract algebra is the polynomial function. The general form of a polynomial can be seen below.`,
])

const P5 = Block.from_single_statement(
    new Tex(`f(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0`)
);

const P6 = new Inline([
    `Each of the `, new Tex(`a_i`), ` are coefficients, and the varying powers of `, new Tex(`x`), ` are variables.`,
]);

const P7 = new Inline([
    `In abstract algebra, we classify polynomials into sets based on the set of numbers that the coefficients are allowed to take. For example, if we only allowed the coefficients of polynomials to be integers, we would refer to this as: the set of polynomials defined over the integers. In fact, this particular set is so common that it has its own special symbol: `, new Tex(`\\mathbb{Z}[x]`), `.`,
]);

const P8 = Block.from_multiple_statements([
    new Tex(`4x^2 + 3x + 2 \\in \\mathbb{Z}[x]`),
    new Tex(`4x^2 + \\frac{1}{2}x + 2 \\notin \\mathbb{Z}[x]`),
    new Tex(`4x^2 + 3x + \\pi \\notin \\mathbb{Z}[x]`),
]);

const P9 = new Inline([
    `In abstract algebra, the most common sets of polynomials we work with are the following, `, new Tex(`\\mathbb{Z}[x]`), `, `, new Tex(`\\mathbb{Q}[x]`), `, `, new Tex(`\\mathbb{R}[x]`), `, and `, new Tex(`\\mathbb{C}[x]`), `. The blackboard bold font represents the set of the coefficients, while the attached`, new Tex(`[x]`), ` represents we are talking about polynomials in one variable a.k.a univariate polynomials.`,
]);




export const POLYNOMIALS = new Section({
    title: new Title({
        inline: new Inline(["Sets of Polynomials"]),
    }),
    content: [
        P1,
        P2,
        P3, 
        P4,
        P5,
        P6,
        P7,
        P8,
        P9,
    ]
})
