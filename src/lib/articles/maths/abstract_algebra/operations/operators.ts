import { Inline, Section, Title, Tex, Block, List } from "$lib/tex";

const P1 = new Inline([
    `There are many kinds of operations used in abstract algebra.`,
]);

const P2 = new Inline([
    
])

export const OPERATORS = new Section({
    title: new Title({
        inline: new Inline(["Examples of Operations"]),
    }),
    content: [
        P1,
    ]
})

