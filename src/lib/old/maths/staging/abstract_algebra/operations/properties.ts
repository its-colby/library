import { Inline, Section, Title, Tex, Block, List } from "$lib/tex";

const P1 = new Inline([
    `In abstract algebra, we often define particular sets of numbers, functions, points, vectors, matrices, polynomials, and more.`,
]);

const P2 = new Inline([
    
])

export const PROPERTIES = new Section({
    title: new Title({
        value: "Properties of Operations",
    }),
    content: [
        P1,
    ]
})

