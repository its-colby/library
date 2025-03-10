import { Block, OneLineStatement, Inline, Section, Tex, Title } from "$lib/tex";

const P1 = new Inline([
    `Number theory explores the properties of various sets of numbers, such as the natural numbers `, new Tex("\\mathbb{N}"), `, integers `, new Tex("\\mathbb{Z}"), `, rational numbers `, new Tex("\\mathbb{Q}"), `, real numbers `, new Tex("\\mathbb{R}"), `, and complex numbers `, new Tex("\\mathbb{C}"), `. There are many more common sets of numbers like these, and in this document, we will explore a few of them.`
]);

const P2 = new Inline([
    `Before I introduce a new set of numbers, lets review a bit about polynomials, specifically univariate (single-variable) polynomials. Recall their general form.`
]);

const P3 = Block.from_single_statement(
    new Tex(`f(x) = a_nx^n + \\cdots + a_1x + a_0`)
);

const P4 = new Inline([
    `All of the following polynomials satisfy the general form above.`
]);

const P5 = Block.from_multiple_statements([
    new Tex(`2 \\cdot x^2 \\ + \\ \\frac{1}{3} \\cdot x \\ + \\ (-5)`),
    new Tex(`\\sqrt{2} \\cdot x^2 \\ + \\ \\pi \\cdot x \\ + \\ (-1)`),
    new Tex(`x^2 \\ + 0 \\cdot x \\ + \\ 1`),
    new Tex(`x^3 \\ + \\cdot x^2 \\ + \\ 0 \\cdot x \\  + \\ (-2i)`)
]);

const P6 = new Inline([
    `Mathematicians typically use a more precise notation when dealing with polynomials. They will restrict the polynomial to only allow coefficients from a certain set of numbers. For example, we may only want to consider polynomials with coefficients from the rational numbers, or alternatively, the integers. If we choose to restrict our polynomials to rational coefficients, we will write `, new Tex("\\mathbb{Q}[x]"), `, and say that the polynomial is "defined over the rationals". In other words, `, new Tex("\\mathbb{Q}[x]"), ` is the set of all polynomials with rational coefficients. You can see some formal definitions below.`
]);

const P7 = Block.from_multiple_statements([
    new Tex("\\mathbb{Q}[x] = \\{ \\enspace f \\enspace \\mid \\enspace f(x) = a_nx^n + \\cdots + a_1x + a_0, \\enspace a_i \\in \\mathbb{Q} \\enspace \\}"),
    new Tex("\\mathbb{Z}[x] = \\{ \\enspace f \\enspace \\mid \\enspace f(x) = a_nx^n + \\cdots + a_1x + a_0, \\enspace a_i \\in \\mathbb{Z} \\enspace \\}"),
    new Tex("\\mathbb{R}[x] = \\{ \\enspace f \\enspace \\mid \\enspace f(x) = a_nx^n + \\cdots + a_1x + a_0, \\enspace a_i \\in \\mathbb{R} \\enspace \\}"),
    new Tex("\\mathbb{C}[x] = \\{ \\enspace f \\enspace \\mid \\enspace f(x) = a_nx^n + \\cdots + a_1x + a_0, \\enspace a_i \\in \\mathbb{C} \\enspace \\}"),
]);

const P8 = new Inline([
    `Although not directly relevant, it is worth noting that each of these sets form commutative rings under term-wise addition and polynomial multiplication. This is a statement that would be demonstrated in a course on ring theory or abstract algebra. This is why each of them are occasionally referred to as a ring of polynomials. In other words, `, new Tex("\\mathbb{Q}[x]"), `, `, new Tex("\\mathbb{Z}[x]"), `, `, new Tex("\\mathbb{R}[x]"), `, and `, new Tex("\\mathbb{C}[x]"), ` are all rings of polynomials.`
]);

const P9 = new Inline([
    `So far, we have only displayed polynomial functions. But, in algebra, we are often concerned with polynomial equations, namely, what does `, new Tex("x"), ` equal when you set the function to 0?`
])

const P10 = Block.from_single_statement(
    new Tex(`f(x) = a_nx^n + \\cdots + a_1x + a_0 \\quad \\to \\quad 0 = a_nx^n + \\cdots + a_1x + a_0`)
);

const P11 = new Inline([
    `Now, we are set up to introduce the set of algebraic numbers. The questions number theorists ask themselves is, when we have a polynomial defined over the rationals, what are the possible values of `, new Tex("x"), ` generally? For example, are all complex numbers possible solutions? Are all rational numbers possible solutions? Are all irrational numbers possible solutions?`
])

const P12 = new Inline([
    `Lets define what we are looking for more formally. The Fundamental Theorem of Algebra tell us that all solutions to any polynomial will be in the set of complex numbers. Proving this theorem is outside the scope of this document, and would normally be offered in a course on complex analysis or galois theory. Anyways, we decide to restrict our polynomial to rational coefficients. We still know that our solutions will be "from" the set of complex numbers, but we want to know which numbers are "possible". Many complex numbers, no matter which polynomial over the rationals is given, might never be a solution; in other words, they would be "impossible". Lets formally define this set of "possible" numbers. We will call them the algebraic numbers and denote them as `, new Tex("\\mathbb{A}"), `.`
])

const P13 = Block.from_multiple_statements([
    new Tex(`\\mathbb{A} = \\{ \\enspace 
        \\alpha \\in \\mathbb{C} 
        \\enspace \\mid \\enspace  
        \\exists f \\in \\mathbb{Q}[x]
        \\enspace , \\enspace 
        f(\\alpha) = 0
    \\enspace \\}
    `)
]);

const P14 = new Inline([
    `We can also define the set of algebraic numbers in an alternative, but equivalent manner, if we are aware of one more fact. Namely, when a polynomial from `, new Tex("\\mathbb{Q}[x]"), ` is set to 0, you can simplify the equation to remove all fractions. Just multiply both sides by the least common multiple (LCM) of the denominators of the coefficients. After doing so, the coefficients will only be integers.`
]);

const P15 = Block.from_multiple_statements([
    new Tex(`\\frac{3}{4}x^3 + \\frac{2}{5}x^2 - 7 = 0`),
    new Tex(`\\text{Multiply both sides by } LCM(4, 5) = 20`),
    new Tex(`0 = 15x^3 + 8x^2 - 140`)
]);

const P16 = new Inline([
    `So, when set to 0, every polynomial in `, new Tex("\\mathbb{Q}[x]"), ` can be transformed into a polynomial in `, new Tex("\\mathbb{Z}[x]"), `. Thus, we can instead define the algebraic numbers as the set of solutions to a polynomial in `, new Tex("\\mathbb{Z}[x]"), `.`
]);

const P17 = Block.from_single_statement(
    new Tex(`\\mathbb{A} = \\{ \\enspace 
        \\alpha \\in \\mathbb{C} 
        \\enspace \\mid \\enspace  
        \\exists f \\in \\mathbb{Z}[x]
        \\enspace , \\enspace 
        f(\\alpha) = 0
    \\enspace \\}
    `)
);


export const DEFINITION_SECTION = new Section({
    title: new Title({
        value: "Defining the Algebraic Numbers",
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
        P14,
        P15,
        P16,
        P17
    ]
})