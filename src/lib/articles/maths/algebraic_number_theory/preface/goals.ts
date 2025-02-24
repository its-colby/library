import { Inline, Section, Title } from "$lib/tex";

const PARAGRAPH_1 = new Inline([
    `When reading mathematics textbooks, I often find myself asking: How did they get from step one to step two? or What does this variable mean—was it ever introduced? Once I uncover the answer, I always wonder why the author didn’t take a few extra sentences to explain it in the first place.`
]);

const PARAGRAPH_2 = new Inline([
    `This document is my attempt to present the fundamentals of algebraic number theory in a way that minimizes these frustrations. My goal is to ensure that readers rarely have to pause to decipher missing steps or unclear notation.`
]);

const PARAGRAPH_3 = new Inline([
    `That said, I have another issue with most textbooks: they often fail to properly motivate new mathematical concepts. Theorems appear without explanation of why they are needed or what problem they solve. However, this document refrains from addressing this particular issue. In that sense, it falls short of my own pedagogical standards. Nonetheless, I hope you will find this document useful.`
]);

export const GOALS_SECTION = new Section({
    title: new Title({
        inline: new Inline(["The Goals of This Document"])
    }),
    content: [
        PARAGRAPH_1,
        PARAGRAPH_2,
        PARAGRAPH_3
    ]
});