import { Inline, Section, Title, Tex, Block, List } from "$lib/tex";

const P1 = new Inline([
    `Recall that a function maps an element of one set `, new Tex(`X`), ` to exactly one element of another set `, new Tex(`Y`), ` denoted as `, new Tex(`f: X -> Y`), `. When the elements of `, new Tex(`X`), ` and `, new Tex(`Y`), `, are both the same set, a.k.a. `, new Tex(`X = Y`), `, we call `, new Tex(`f`), ` an operation on `, new Tex(`X`), `.`,
]);

const P2 = new Inline([
    `Let's take `, new Tex(`X`), ` to be the set of integers `, new Tex(`\\mathbb{Z}`), `.`,
]);

const P3 = Block.from_multiple_statements([
    new Tex(`\\text{addition}(4, 5) = 4 + 5 = 9`),
    new Tex(`\\text{multiplication}(4, 5) = 4 \\cdot 5 = 20`),
    new Tex(`\\text{subtraction}(4, 5) = 4 - 5 = -1`),
    new Tex(`\\text{division}(4, 5) = 4 \\div 5 = 0.8`),
]);

const P4 = new Inline([
    `Clearly, standard division is not an operation on `, new Tex(`\\mathbb{Z}`), `, as its output is not an integer, but rather a rational number. Now, instead of using the set of integers, let's use the set of rational numbers `, new Tex(`\\mathbb{Q}`), `.`,
]);

const P5 = Block.from_multiple_statements([
    new Tex(`\\text{addition}(4, \\frac{2}{3}) = 4 + \\frac{2}{3} = \\frac{14}{3}`),
    new Tex(`\\text{multiplication}(4, 5) = 4 \\cdot 5 = 20`),
    new Tex(`\\text{subtraction}(4, 5) = 4 - 5 = -1`),
    new Tex(`\\text{division}(4, 5) = 4 \\div 5 = 0.8`),
    new Tex(`\\text{square root}(2) = \\sqrt{2} \\approx 1.414`),
]);

const P6 = new Inline([
    `All of the standard operations on the integers, like addition, multiplicaiton, and subtraction still apply. But, now, standard division can be classified as an operation. However, the square root is not an operation on `, new Tex(`\\mathbb{Q}`), `, as its output is not a rational number, but instead, an irrational number.`,
]);

export const DEFINITION = new Section({
    title: new Title({
        inline: new Inline(["Defining Operation"]),
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

