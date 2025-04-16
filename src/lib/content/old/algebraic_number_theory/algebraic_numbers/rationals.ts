import { Block, OneLineStatement, Inline, Section, Tex, Title } from "$lib/tex";

const P1 = new Inline([
    `Henceforth, the adjective 'algebraic' will denote whether or not a number is an algebraic number.`
]);

const P2 = new Inline([
    `From now on, our goal will be to prove facts about the set of algebraic numbers. To start, we will prove which numbers are algebraic. Of course, we could simply define a random polynomial over the rationals, find the solution, and claim the number is algebraic.`
]);

const P3 = Block.from_multiple_statements([
    new Tex("x^2 - 2 \\in \\mathbb{Q}[x]"),
    new Tex("x^2 - 2 = 0 \\quad \\to \\quad x = \\pm \\sqrt{2} \\quad \\therefore \\quad \\pm \\sqrt{2} \\in \\mathbb{A}"),
    new Tex("x^2 + 1 \\in \\mathbb{Q}[x]"),
    new Tex("x^2 + 1 = 0 \\quad \\to \\quad x = \\pm i \\quad \\therefore \\quad \\pm i \\in \\mathbb{A}"),
])

const P4 = new Inline([
    `However, ideally we could prove more general statements rather than iterating through all known polynomials one by one. First, observe that we don't have to define a polynomial, then attempt to solve it. Instead, we could define a solution, and attempt to derive its corresponding polynomial.`
]);

const P5 = Block.from_multiple_statements([
    new Tex("x = \\frac{7}{9} \\quad \\to \\quad 9x = 7 \\quad \\to \\quad 9x - 7 = 0"),
    new Tex("9x - 7 \\in \\mathbb{Q}[x] \\quad \\therefore \\quad \\frac{7}{9} \\in \\mathbb{A}"),
    new Tex("x = 9 \\quad \\to \\quad x - 9 = 0"),
    new Tex("x - 9 \\in \\mathbb{Q}[x] \\quad \\therefore \\quad 9 \\in \\mathbb{A}"),
]);

const P6 = new Inline([
    `From these examples, it is pretty clear that we could have done the same steps for any rational number or any integer. Thus, we will abstract the particular numbers from the previous step, and use variables instead.`
]);

const P7 = Block.from_multiple_statements([
    new Tex(`\\frac{a}{b} \\enspace \\mid \\enspace a, b \\in \\mathbb{Z} \\quad \\to \\quad x = \\frac{a}{b} \\quad \\to \\quad bx = a \\quad \\to \\quad bx - a = 0`),
    new Tex(`bx - a \\in \\mathbb{Q}[x] \\quad \\therefore \\quad \\frac{a}{b} \\in \\mathbb{A}`),
]);

const P8 = new Inline([
    `Thus, all rational numbers are algebraic. And, of course, all integers are rational (just set b = 1 in the fraction above). Thus, all integers are algebraic. And, of course, all natural numbers are integers.`
]);

const P9 = Block.from_single_statement(new Tex(`\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{A}`));


export const RATIONALS_SECTION = new Section({
    title: new Title({
        value: "The Rationals are Algebraic",
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