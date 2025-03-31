import * as T from "$lib/book";
import { chapter_1 } from "./01";
import { chapter_2 } from "./02";
import { chapter_3 } from "./03";
import { chapter_4 } from "./04";
import { chapter_5 } from "./05";
import { chapter_6 } from "./06";

const introduction = [
    T.Prose.parse(`
        We will now investigate whether particular ideals of $$\\mathbb{Z[x]}$$ are maximal.
    `),
];


export const integer_polynomials = T.BookChapter.from_subchapters({
    introduction: introduction,
    subchapters: [
        chapter_1,
        chapter_2,
        chapter_3,
        chapter_4,
        chapter_5,
        chapter_6,
    ],
    title: T.Prose.parse(`Maximality in $$\\mathbb{Z}[x]$$`)
});

