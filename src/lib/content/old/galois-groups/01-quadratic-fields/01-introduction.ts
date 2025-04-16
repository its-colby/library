import { Block, Inline, Section, Tex, Title } from "$lib/tex";

const P1 = Block.from_multiple_statements([
    new Tex(`
        0 = ax^2 + bx + c 
        \\quad 
        \\text{where} \\enspace a, b, c \\in \\mathbb{Q}
    `),
    new Tex(`
        x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
    `)
], new Tex(`\\text{Quadratic Trinomial over }\\mathbb{Q}`))

const P2 = Block.from_multiple_statements([
    new Tex(`
        0 = ax^2 + c 
        \\quad 
        \\text{where} \\enspace a, c \\in \\mathbb{Q}
    `),
    new Tex(`
        x = \\pm \\sqrt{-\\frac{c}{a}}
    `)
], new Tex(`\\text{Quadratic Binomial over }\\mathbb{Q}`))

const P3 = Block.from_multiple_statements([
    new Tex(`
        -\\frac{c}{a} \\in \\mathbb{Q}
    `),
    new Tex(`
        \\text{Let } d = -\\frac{c}{a}
    `)
])

const P4 = Block.from_multiple_statements([
    new Tex(`
        0 = x^2 - d 
        \\quad 
        \\text{where} \\enspace d \\in \\mathbb{Q}
    `),
    new Tex(`
        x = \\pm \\sqrt{d}
    `)
], new Tex(`\\text{Simplified Quadratic Binomial over }\\mathbb{Q}`))

const P5 = Block.from_multiple_statements([
    new Tex(`
        d: \\text{ is a perfect square, e.g. } 4
    `),
    new Tex(`
        d: \\text{ includes a square factor, e.g. } 8
    `),
    new Tex(`
        d: \\text{ is square-free, e.g. } 2
    `),
], new Tex(`\\text{All Cases}`))



export const INTRODUCTION = new Section({
    title: new Title({
        value: "Introduction",
    }),
    content: [
        P1,
        P2,
        P3,
        P4,
        P5,
    ]
})
