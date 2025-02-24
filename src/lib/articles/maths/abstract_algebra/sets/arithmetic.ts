import { Inline, Section, Title, Tex, Block, List } from "$lib/tex";

const P1 = new Inline([
    `Basic arithmetic can be applied to sets in order to derive new sets. In essence, it can be viewed as another way of defining a set.`
]);

const P2 = new Inline([
    `For example, the following sets describe the even integers and the odd integers respectively.`
]);

const P3 = Block.from_multiple_statements([
    new Tex(`2\\mathbb{Z}`),
    new Tex(`2\\mathbb{Z} + 1`),
]);

const P4 = new Inline([
    `Here we are using element-wise multiplication and addition with previous sets to derive new sets. The notation `, new Tex(`2\\mathbb{Z}`), ` tells us to take every integer in the set `, new Tex(`\\mathbb{Z}`), ` and multiply them by `, new Tex(`2`), `.`
]);

const P5 = new Inline([
    `Another common example of arithmetic on sets is floor division. Floor division, also called integer division, is regular division, but fractional quantities are not allowed. It is typically represented by the symbol `, new Tex(`\\ // `), `.`
])

const P6 = Block.from_single_statement(
    new Tex(`4\\ // \\ 3 = 1`),
)

const P7 = new Inline([
    `When we use floor division in sets, we use the same notation as regular division, a single slash `, new Tex(`/`), `, as opposed to the double slash typically used in integer expressions. See the example below.`
])

const P8 = Block.from_single_statement(
    new Tex(`\\mathbb{Z}/2\\mathbb{Z} = \\{0, 1\\}`),
)

const P9 = new Inline([
    `Imagine the set of integers as the set of all odd integers in addition with the set of all even integers. Now, imagine element-wise, we divide each of these sets by the even integers. The even integers divided by the corresponding even integers will be `, new Tex(`0`), `, and the odd integers divided by the corresponding even integers will be `, new Tex(`1`), `, since every odd integer is one more than an even integer.`
]);

const P10 = new Inline([
    `Technically, this whole arithmetic process is called a "modulo operation". A "modulo operation" on sets, is when we perform floor division of one set by a multiple of that same set.`
]);

const P11 = new Inline([
    `The last arithemtic operation we will view is the cartesian product. It is represented by the symbol `, new Tex(`\\times`), `, but it is not to be confused with multiplication. The cartesian product is a product of two sets, and is represented by the set of all possible pairs of elements from the two sets.`,
]);

const P12 = Block.from_multiple_statements([
    new Tex(`S_1 = \\{1, 2\\}`),
    new Tex(`S_2 = \\{4, 5\\}`),
    new Tex(`S_1 \\times S_2 = \\{ (1, 4), (1, 5), (2, 4), (2, 5) \\}`),
]);

export const ARITHMETIC = new Section({
    title: new Title({
        inline: new Inline(["Arithmetic on Sets"]),
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
    ]
})






