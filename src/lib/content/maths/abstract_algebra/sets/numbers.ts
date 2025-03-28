import { Inline, Section, Title, Tex, Block, List } from "$lib/tex";


const P1 = new Inline([
    `Sets of numbers are the most common sets in abstract algebra. Although we could define infinitely many sets of numbers, there are some more common than others, so much so that they have their own special symbols.`,
]);

const P2 = Block.from_multiple_statements([
    new Tex(`\\mathbb{N} = \\{ 0, 1, 2, 3, \\dots \\}`),
    new Tex(`\\mathbb{Z} = \\{ \\dots, -2, -1, 0, 1, 2, \\dots \\}`),
    new Tex(`\\mathbb{Q} = \\{ \\frac{a}{b} \\mid a, b \\in \\mathbb{Z}, b \\neq 0 \\}`),
    new Tex(`\\mathbb{R} = \\{ x \\mid x \\text{ is rational or irrational} \\}`),
    new Tex(`\\mathbb{C} = \\{ a + bi \\mid a, b \\in \\mathbb{R} \\}`),
]);

const P3 = new List([
    new Inline([
        new Tex(`\\mathbb{N}`), ` is the set of all natural numbers a.k.a. counting numbers.`,
    ]),
    new Inline([
        new Tex(`\\mathbb{Z}`), ` is the set of all integers.`,
    ]),
    new Inline([
        new Tex(`\\mathbb{Q}`), ` is the set of all rational numbers a.k.a fractions of integers that avoid division by zero. e.g. `, new Tex(`\\frac{1}{2}`), `, `, new Tex(`\\frac{3}{1}`), `, `, new Tex(`\\frac{-5}{7}`), `.`,
    ]),
    new Inline([
        new Tex(`\\mathbb{R}`), ` is the set of all real numbers a.k.a. the rational and irrational numbers. Irrational numbers are numbers that cannot be expressed as a fraction of two integers, thus have no repeating patterns beyond the decimal point. e.g. `, new Tex(`\\sqrt{2}`), `, `, new Tex(`\\pi`), `, `, new Tex(`e`), `, `, new Tex(`\\frac{1}{\\sqrt{2}}`), `.`,
    ]),
    new Inline([
        new Tex(`\\mathbb{C}`), ` is the set of all complex numbers. e.g. `, new Tex(`2 + 3i`), `, `, new Tex(`\\enspace 0 + 1i`), `, `, new Tex(`\\enspace -\\pi - \\sqrt{2}i`), `.`,
    ]),
]);

const P4 = new Inline([
    `All of these sets are infinite. Moreover, each set is a subset of the next set in the list. For example, every natural number is an integer, every integer is a rational number, and so forth. We use two notations `, new Tex(`\\subset`), ` and `, new Tex(`\\subseteq`), ` to denote that a set is a subset of another set. The first, called a proper subset, signifies that the parent set has at least one element that is not in the child set. The second signifies that every element of the parent set may or may not be in the child set.`,
]);

const P5 = Block.from_single_statement(new Tex(`\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R} \\subset \\mathbb{C}`));


export const NUMBERS = new Section({
    title: new Title({
        value: "Sets of Numbers",
    }),
    content: [
        P1,
        P2,
        P3, 
        P4,
        P5,
    ]
})



