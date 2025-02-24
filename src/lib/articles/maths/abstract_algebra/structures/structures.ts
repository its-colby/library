import { Inline, Section, Block, Tex, Title, List } from "$lib/tex";

const P1 = new Inline([
    `The integers support the operations of addition and multiplication, with the following properties.`,
]);

const P2 = new List([
    new Inline([`Additive Identity`]),
    new Inline([`Additive Inverses`]),
    new Inline([`Additive Commutativity`]),
    new Inline([`Additive Associativity`]),
    new Inline([`Multiplicative Identity`]),
    new Inline([`Multiplicative Distributivity over Addition`]),
]);

const P3 = new Inline([
    `The integers do not support multiplicative inverses. As it turns out, the set of polynomials under the operations of polynomial addition and polynomial multiplication, support exactly the same properties as the integers. `,
]);

const P4 = new Inline([
    `The rationals, under the operations of addition and multiplication, support all of the following properties of the integers, but they also support multiplicative inverses. And, as it turns out, the real and complex numbers, under the same operations, still support all of these properties.`,
]);

const P5 = new Inline([
    `As we can see, regardless of the kind of set and supported operations, their can still be an overlap in properties shared. When two sets (coupled with their supported operations) have the same properties, we say they have the same "algebraic structure". In other words, the real numbers, under addition and multiplication, have the same algebraic structure as the rationals. And, the rationals have a different algebraic structure than the integers. And, lastly, the set of univarite polynomials over the rationals, under polynomial addition and multiplication, have the same algebraic structure as the integers, under addition and multiplication. `,
]);

const P6 = new Inline([
    `Some algebraic structures are so common, that they have been given their own names. In the next sections, we will look at some of the most common algebraic structures.`,
]);

export const STRUCTURES = new Section({
    title: new Title({
        inline: new Inline(["Defining an Algebraic Structure"]),
    }),
    content: [
        P1,
        P2,
        P3,
        P4,
        P5,
        P6,
    ]
})






