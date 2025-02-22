import { Inline, Section, Block, Tex, Title } from "$lib/tex";

const P1 = new Inline([
    `In mathematics, there are clear divisions between different collections of objects. For example, integers are different from polynomials, which are different from points in space, which are different from all functions. However, at the broadest level of abstraction, all of these things have 1 thing in common: they are all collections of objects of the same ilk. In mathematics, we call these collections "sets". As long as you can make some justification that each object is of the same kind, then you can call it a set.`
]);

const P2 = new Inline([
    `Lets take a look at some common examples of sets. First, we will look at different sets of numbers. First, we have the set of all natural numbers, `, new Tex(`\\mathbb{N}`), `, which represent all the counting numbers (ie numbers you would use in counting). Note, some people include 0 in the set of natural numbers, and some people do not.`,
])

const P3 = Block.from_single_statement(
    new Tex(`\\mathbb{N} = \\{1, 2, 3, \\dots\\}`)
);

const P4 = new Inline([
    `We also have the set of all integers, `, new Tex(`\\mathbb{Z}`), `, as well as the set of all even integers, `, new Tex(`2\\mathbb{Z}`), `, and of all odd integers, `, new Tex(`2\\mathbb{Z} + 1`), `.`,
])

const P5 = Block.from_multiple_statements([
    new Tex(`\\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}`),
    new Tex(`2\\mathbb{Z} = \\{\\dots, -4, -2, 0, 2, 4, \\dots\\}`),
    new Tex(`2\\mathbb{Z} + 1 = \\{\\dots, -3, -1, 1, 3, 5, \\dots\\}`)
]);

const P6 = new Inline([
    `We also have the set of all rational numbers, `, new Tex(`\\mathbb{Q}`), `, which represent all the fractions of integers. `,
])

const P7 = Block.from_single_statement(
    new Tex(`\\mathbb{Q} = \\{\\frac{a}{b} \\mid a, b \\in \\mathbb{Z}, b \\neq 0\\}`)
);

const P8 = new Inline([
    `We also have the set of all real numbers, `, new Tex(`\\mathbb{R}`), `, which represent all the numbers on the number line. In other words, these include all rational and irrational numbers, aka numbers that can and cannot be written as fractions of integers. By the way, a line over a number indicates that it repeats infinitely.`,
])

const P9 = Block.from_single_statement(
    new Tex(`\\mathbb{R} = \\{\\dots, -2, -1.\\overline{9}, \\dots, -1.9\\overline{8}, \\dots, 0, \\dots, 1, \\dots \\}`)
);

const P10 = new Inline([
    `We also have the set of all complex numbers, `, new Tex(`\\mathbb{C}`), `, which represent all possible combinations of real and imaginary numbers.`,
])

const P11 = Block.from_single_statement(
    new Tex(`\\mathbb{C} = \\{a + bi \\enspace \\mid \\enspace i = \\sqrt{-1} \\quad , \\quad a, b \\in \\mathbb{R}\\}`)
);

const P12 = new Inline([
    `Besides sets of numbers, we also have sets of polynomials. For example, we could define a set as all the polynomials with integer coefficients, `, new Tex(`\\mathbb{Z}[x]`), `. In other words, any fraction of integers, irrational numbers, or imaginary numbers would not be allowed as coefficients.`,
])

const P13 = Block.from_single_statement(
    new Tex(`\\mathbb{Z}[x] = \\{a_0 + a_1x + a_2x^2 + \\dots + a_nx^n \\mid a_i \\in \\mathbb{Z}\\}`)
);

const P14 = new Inline([
    `In the language of mathematics, we would say this is the set of all polynomials "over the integers". In a similar vein, we could do this for the rationals, as well as the other sets of number we have seen.`,
])

const P15 = Block.from_multiple_statements([
    new Tex(`\\mathbb{Q}[x] = \\{a_0 + a_1x + a_2x^2 + \\dots + a_nx^n \\mid a_i \\in \\mathbb{Q}\\}`),
    new Tex(`\\mathbb{R}[x] = \\{a_0 + a_1x + a_2x^2 + \\dots + a_nx^n \\mid a_i \\in \\mathbb{R}\\}`),
    new Tex(`\\mathbb{C}[x] = \\{a_0 + a_1x + a_2x^2 + \\dots + a_nx^n \\mid a_i \\in \\mathbb{C}\\}`)
]);

const P16 = new Inline([
    `We could also define much more specific sets of polynomials. For example, we could define the set, `, new Tex(`S`), `, as the set of all polynomials with a leading coefficient of 1 (aka monic polynomials), defined over the real numbers, that have an integer solution.`,
])

const P17 = Block.from_single_statement(
    new Tex(`S = \\{\\enspace f(x) = a_nx^n + \\dots + a_0 \\enspace \\mid \\enspace a_i \\in \\mathbb{R} \\enspace , \\enspace a_n = 1 \\enspace , \\\enspace \\land \\enspace \\exists z \\in \\mathbb{Z} \\text{ where } f(z) = 0\\}`)
);

const P18 = new Inline([
    `We could define arbitraily many sets of objects. And, in mathematics, there are tons of different sets. Usually, the sets you work with depend on the context of the problem you are trying to solve. Nonetheless, I will introduce one more set, a bit of a complex one. I will introduce the set of symmetric transformations of a geometric shape, in particular, a square. This set will be used later on.`,
])

const P19 = new Inline([
    `A symmetry of a square is a way to apply some geometric transformation to the square so that it looks the same as it did before. For example, if we rotate a square by 90 degrees, it looks the same as it did before. This would be called a symmetry. However, if we rotated a square by 10 degrees, the square would not look the same; it would look crooked. `,
])

const P20 = new Inline([
    `There are 8 total symmetries of a square, meaning there are 8 elements in this set. There are 4 rotations (0, 90, 180, 270) and 4 reflections (vertical, horizontal, and 2 diagonals).`,
])

export const SETS = new Section({
    title: new Title({
        inline: new Inline(["Sets"]),
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
        P17,
        P18,
        P19,
        P20,
    ]
})







