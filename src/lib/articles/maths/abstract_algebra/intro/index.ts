import { Inline, Section, Block, Tex, Title } from "$lib/tex";

const P1 = new Inline([
    `Before I introduce abstract algebra, I will briefly review some basic concepts from elementary algebra.`
]);

const P2 = new Inline([
    `Elementary algebra introduced us to the notion of variables, and various means of manipulating equations. For example, any former student of elementary algebra should be able to solve the following equations using techniques from elementary algebra.`
]);

const P3 = Block.from_multiple_statements([
    new Tex(`4x + 2 = 5 \\quad \\implies \\quad x = \\frac{3}{4}`),
    new Tex(`x^2 - 5x + 6 = 0 \\quad \\implies \\quad x = 2 \\enspace \\lor \\enspace x = 3`),
]);

const P4 = new Inline([
    `In abstract algebra, we no longer directly focus on dveloping tools for solving equations. Instead, we focus on abstraction. `
])

const P5 = new Inline([
    `Abstraction serves many purposes in our lives. For example, lets take the concept "dog". "Dog" is an abstraction of all specific types of dogs, such as "golden retrievers", "poodles", etc. Namely, the concept "dog" embodies what they all have in common, while remaining agnostic to the specific details of each individual type of dog.`
])

const P6 = new Inline([
    `Abstraction makes the knowledge we possess more powerful. For example, if I prove a fact about "dog", then I have simultaneously proven the fact for every kind of dog. If I prove a fact about "golden retrievers", then I would have proven nothing about "poodles".`
])

const P7 = new Inline([
    `Part of abstract algebra will focus on abstracting specific mathematical concepts into more general forms. And, another part of abstract algebra will focus on which properties are true of these more general forms.`
])

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
        P6,
        P7,
    ]
})