import { Inline, Block, MultiLineStatement, Section, Tex, Title } from "$lib/tex";

const P1 = Block.from_inline(
    new Inline([
        `A set is any collection of definite, distinguishable objects of perception or thought conceived as a whole.`
    ]),
);

const P2 = new Inline([
    `The definition above is a typical definition for the english word "set". In the field of mathematics known as set theory, this definition is unsatisfactory—namely, because it offers no way of unambiguously proving that a certain collection of objects is a set. For example, how would you prove that a particular object is "definite" or "distinguishable" or "of perception".`
]);

const P3 = new Inline([
    `Proving that a collection of objects is "a set" is outside the scope of abstract algebra. Instead, we will use the informal English definition above, and leave the nuanced and rigorous definitions of "set" to set theory.`
]);

const P4 = new Inline([
    `Here are two examples of sets: one finite, and one infinite. The first set, denoted `, new Tex(`S_1`), `, is the set of all positive integers greater than 1 and less than 5. The second set, denoted `, new Tex(`S_2`), `, is the set of all positive even integers.`
])

const P5 = Block.from_multiple_statements([
    new Tex(`S_1 = \\{2, 3, 4\\}`),
    new Tex(`S_2 = \\{2, 4, 6, 8, 10, \\ldots\\}`),
])


export const DEFINITION = new Section({
    title: new Title({
        inline: new Inline(["Definition"]),
    }),
    content: [
        P1,
        P2,
        P3,
        P4,
        P5
    ]
})

