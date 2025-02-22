import { Inline, Section, Block, Tex, Title } from "$lib/tex";

const P1 = new Inline([
    `Now, we are equipped with the knowledge to understand that some sets support certain operations while other sets do not. For example, lets compare the integers, the rationals, and the set of all symmetric transformations of a square.`,
]);

const P2 = new Inline([
    `The integers support many operations, but we will choose to focus on addition and multiplication. Using this set, addition has an identity element (0), every element has an inverse (-a), its commutative, and its associative. Multiplication has an identity element (1), but no elements have an inverse (besides 1 and -1), it is commutative, and it is associative. And, lastly, multiplication distributes over addition.`,
]);

const P3 = new Inline([
    `Just as we did with the integers, we will focus on addition and multiplication for the rationals. Using this set, addition has an identity element (0), every element has an inverse (-a), its commutative, and its associative. Multiplication has an identity element (1), every element has an inverse, it is commutative, and it is associative. And, lastly, multiplication distributes over addition.`,
]);

const P4 = new Inline([
    `The set of all symmetric transformations of a square supports the operation function composition. And, as previously shown, there is an identity element, every element has an inverse, it is associative, and it is not commutative.`,
]);

const P5 = new Inline([
    `As we can see each of these sets are different. The rationals have every common property, the integers have everything but multiplicative inverses, and the set of symmetric transformations of a square have every common property except commutativity (and only have 1 operation of course).`,
]);

const P6 = new Inline([
    `However, although each of these things are different, they all have something in common. They are a set of objects, along with a set of operations that support certain properties. In abstract algebra, we call this an algebraic structure. In other words, the integers have a different algebraic structure than the rationals than the set of symmetric transformations of a square.`,
]);

const P7 = new Inline([
    `And, as it turns out, there are many common types of algebraic structures. For example, addition and multiplication have the same properties over the rationals, as they do the real numebrs, as they do the complex numbers.`,
]);

export const STRUCTURES = new Section({
    title: new Title({
        inline: new Inline(["Structures"]),
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






