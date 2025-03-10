import { Inline, Section, Title, Tex, Block, List } from "$lib/tex";


const P1 = new Inline([
    `There are some other sets that are not as common, but are still important in abstract algebra.`,
]);

const P2 = new Inline([
    `Instead of sets of functions or numbers, we can also have sets of sets.`,
]);

const P3 = new Inline([
    `For example, we can have the set of all subsets of the set of integers, which we denote as `, new Tex(`\\mathcal{P}(\\mathbb{Z})`), `. This is called the power set of `, new Tex(`\\mathbb{Z}`), `. It contains every imaginable susbset of the integers. The following sets are all *elements* of `, new Tex(`\\mathcal{P}(\\mathbb{Z})`), `:`,
]);

const P4 = Block.from_multiple_statements([
    new Tex(`\\{1, 2, 3\\}`),
    new Tex(`\\{4, 5, 6\\}`),
    new Tex(`\\{1, 3, 5\\}`),
    new Tex(`\\{2\\mathbb{Z}\\}`),
    new Tex(`\\{7\\mathbb{Z} + 1\\}`),
    new Tex(`\\emptyset`),
]);

const P5 = new Inline([
    `These subsets can either be finite or infinite. And, more as a technicallity, `, new Tex(`\\emptyset`), ` is also an element of `, new Tex(`\\mathcal{P}(\\mathbb{Z})`), `. The `, new Tex(`\\emptyset`), ` is the set that contains no elements; its called the empty set.`,
]);

const P6 = new Inline([
    `A more common set of sets is a space—namely, a set of points. For example, the set of all points in a plane is `, new Tex(`\\mathbb{R}^2`), `. This notation is called the Cartesian product of `, new Tex(`\\mathbb{R}`), ` with itself. It represents the set of all possible pairs of real numbers. And, each of these pairs can be called sets, thus, `, new Tex(`\\mathbb{R}^2`), ` is a set of sets.`,
])

const P7 = Block.from_single_statement(
    new Tex(`\\mathbb{R}^2 = \\{ (x, y) \\mid x, y \\in \\mathbb{R} \\}`),
);

const P8 = new Inline([
    `If you were to draw a 2-dimensional graph that extended infinitely in all directions, then every point on that graph would be an element of `, new Tex(`\\mathbb{R}^2`), `.`,
]);

const P9 = new Inline([
    `We can also have sets of vectors and matrices. For example, the set of all 2x2 matrices is `, new Tex(`M_{2\\times2}(\\mathbb{R})`), `.`,
]);

export const MISC = new Section({
    title: new Title({
        value: "Miscellaneous Sets",
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