import { Inline, Section, Title } from "$lib/tex";

const TITLE = new Title({
    inline: new Inline(["Preface"])
});

const PARAGRAPH_1 = new Inline([
    `This document presents mathematical concepts, definitions, and proofs in an unmotivated manner, appearing to emerge for no reason.`
]);

const PARAGRAPH_2 = new Inline([
    `Intended as a detailed reference, this document does not aim to teach or meet pedagogical standards. While it may aid learning, it is not designed for mastery.`
]);

export const PREFACE_SECTION = new Section({
    title: TITLE,
    content: [
        PARAGRAPH_1,
        PARAGRAPH_2
    ]
});