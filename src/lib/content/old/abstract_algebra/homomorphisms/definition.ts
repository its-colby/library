import { Inline, Section, Block, Tex, Title, List } from "$lib/tex";

const P1 = new Inline([
    `The integers support the operations of addition and multiplication, with the following properties.`,
]);


export const DEFINITION = new Section({
    title: new Title({
        value: "Definition",
    }),
    content: [
        P1,
    ]
})