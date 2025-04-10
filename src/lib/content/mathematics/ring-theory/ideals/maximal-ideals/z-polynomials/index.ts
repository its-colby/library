import * as T from "$lib/book";
import { chapter_1 } from "./01-2x-plus-4";
import { chapter_2 } from "./02-2";
import { chapter_3 } from "./03-quadratic";
import { chapter_4 } from "./04-complicated-quadratic";
import { chapter_5 } from "./05-three-terms";
import { chapter_6 } from "./06-general-form";

const introduction = [
    T.Prose.parse(`
        We will now investigate whether particular ideals of $$\\mathbb{Z[x]}$$ are maximal.
    `),
];


export const chapter = T.BookChapter.from_subchapters({
    introduction: introduction,
    subchapters: [
        chapter_1,
        chapter_2,
        chapter_3,
        chapter_4,
        chapter_5,
        chapter_6,
    ],
    title: T.Prose.parse(`Examples in $$\\mathbb{Z}[x]$$`)
});

