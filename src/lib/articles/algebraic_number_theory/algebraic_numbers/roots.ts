import { Block, OneLineStatement, Inline, Section, Tex, Title } from "$lib/tex";

const P1 = new Inline([
    `Let's try to reverse engineer more general statements about the set of algebraic numbers. Let's take the same approach with roots.`
]);

const P2 = Block.from_multiple_statements([
    new Tex(`x = \\sqrt[3]{\\frac{2}{3}} \\quad \\to \\quad x^3 = \\frac{2}{3} \\quad \\to \\quad 3x^3 = 2 \\quad \\to \\quad 3x^3 - 2 = 0`),
    new Tex(`3x^3 - 2 \\in \\mathbb{Q}[x] \\quad \\therefore \\quad \\sqrt[3]{\\frac{2}{3}} \\in \\mathbb{A}`)
]);

const P3 = new Inline([
    `Now, lets substitute in variables to make this more general.`
]);

const P4 = Block.from_multiple_statements([
    new Tex(`\\sqrt[n]{\\frac{a}{b}} \\enspace \\mid \\enspace n \\in \\mathbb{N}\\enspace , \\enspace a, b \\in \\mathbb{Z}`),
    new Tex(`x = \\sqrt[n]{\\frac{a}{b}} \\quad \\to \\quad x^n = \\frac{a}{b} \\quad \\to \\quad bx^n = a \\quad \\to \\quad bx^n - a = 0`),
    new Tex(`bx^n - a \\in \\mathbb{Q}[x] \\quad \\therefore \\quad \\sqrt[n]{\\frac{a}{b}} \\in \\mathbb{A}`)
]);

const P5 = new Inline([
    `Thus, all nth degree roots of rational numbers are algebraic. However, we can prove an even more general statement than this. Let's compare the following two polynomials.`
]);

const P6 = Block.from_multiple_statements([
    new Tex(`f(x) = x^6 - 2x^2 - 8 \\quad \\in \\mathbb{Q}[x]`),
    new Tex(`g(x) = x^3 - 2x - 8 \\quad \\in \\mathbb{Q}[x]`)
]);

const P7 = new Inline([
    `Notice that the first polynomial has a consistently higher degree in each term. Namely, if you were to divide each exponent in the first polynomial by 2, you would get the second polynomial. Let's rearrange these polynomials a bit to make this more clear.`
]);

const P8 = Block.from_multiple_statements([
    new Tex(`f(x) = (x^2)^3 - 2(x^2)^1 - 8 \\quad \\in \\mathbb{Q}[x]`),
    new Tex(`g(x) = (x)^3 - 2(x)^1 - 8 \\quad \\in \\mathbb{Q}[x]`)
]);

const P9 = new Inline([
    `In this form, it is clear to see that`
]);

const P10 = Block.from_single_statement(
    new Tex(`f(x) = g(x^2)`)
);

const P11 = new Inline([
    `Thus, if `, new Tex(`f(x)`), ` has a soluation at `, new Tex(`\\alpha`), ` then `, new Tex(`g(x)`), ` must have a solution at `, new Tex(`\\alpha^2`), `. Or, alternatively, if `, new Tex(`g(x)`), ` has a solution at `, new Tex(`\\beta`), ` then `, new Tex(`f(x)`), ` must have a solution at `, new Tex(`\\sqrt{\\beta}`), `.`
]);

const P12 = Block.from_multiple_statements([
    new Tex(`f(\\alpha) = g(\\alpha^2) = 0`),
    new Tex(`f(\\sqrt{\\beta}) = g(\\beta) = 0`)
]);

const P13 = new Inline([
    `Now, lets fill our example in with variables, and prove a more general statement. We will create two functions, just as before, where `, new Tex(`f(x) = g(x^k)`), `. Then, we will show two claims. The first is that an algebraic number raised to the `, new Tex(`k`), `th power is algebraic. This is shown through the variable `, new Tex(`\\alpha`), `. Then, we will show that the `, new Tex(`k`), `th root of an algebraic number is algebraic. This is shown through the variable `, new Tex(`\\beta`), `. `
]);

const P14 = Block.from_multiple_statements([
    new Tex(`g(x) = a_nx^n + \\cdots + a_1x + a_0 \\quad \\in \\mathbb{Q}[x]`),
    new Tex(`f(x) = a_n(x^k)^n + \\cdots + a_1(x^k) + a_0 \\quad \\in \\mathbb{Q}[x]`),
    new Tex(`f(x) = g(x^k)`),
    new Tex(`f(\\alpha) = 0 \\implies g(\\alpha^k) = 0`),
    new Tex(`g(\\beta) = 0 \\implies f(\\sqrt[k]{\\beta}) = 0`),
    new Tex(`f \\in \\mathbb{Q}[x] \\therefore \\alpha \\in \\mathbb{A}`),
    new Tex(`g \\in \\mathbb{Q}[x] \\therefore \\beta \\in \\mathbb{A}`),
    new Tex(`\\therefore \\quad \\alpha^k, \\sqrt[k]{\\beta} \\in \\mathbb{A}`)
]);

export const ROOTS_SECTION = new Section({
    title: new Title({
        inline: new Inline([
            "The Roots of Algebraic Numbers are Algebraic",
        ]),
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
        P10,
        P11,
        P12,
        P13,
        P14
    ]
})