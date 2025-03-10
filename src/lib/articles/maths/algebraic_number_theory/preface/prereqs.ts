import { Section, Inline, Title } from "$lib/tex";

const PARAGRAPH_1 = new Inline([
    `The fundamentals of algebraic number theory rely heavily on ring theory, moderately on group theory and field theory, and sparingly on Galois theory and elementary number theory. Although I will try to be as self-contained as possible, I will inevtiably need to assume some familiarity with each of these topics, especially ring theory. `
]);

export const PREREQS_SECTION = new Section({
    title: new Title({
        value: "Prerequisites"
    }),
    content: [
        PARAGRAPH_1
    ]
});