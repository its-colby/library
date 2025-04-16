import * as T from "$book";

const introduction = [
    T.Prose.parse(`
        TBD
    `),
];

import { chapter as chapter_1 } from "./1-1-minus-j";
import { chapter as chapter_2 } from "./2";
import { chapter as chapter_3 } from "./3";

export const chapter = T.BookChapter.from_subchapters({
    introduction: introduction,
    subchapters: [
        chapter_1,
        chapter_2,
        chapter_3,
    ],
    title: T.Prose.parse(`Examples in $$\\mathbb{H}$$`)
});

// any two-sided ideal not 0 or whole ring is not maximal

// quaternion element = a + bi + cj + dk

// prove teh quotient ring is not {0}, for testing proper ideals

// chat below

// left ideal (1 - j) is not maximal, contained in (1 - j, 1 - i)
// left ideal (i) is not maximal
// left ideal (i + 2j) is not maximal

// left ideal (j + k) is maximal
// left ideal (i + 2j - k) is maximal
// left ideal (i + j) is maximal

// grok below

// left ideal (a) where a in R is not maximal?
// left ideal (a + bi) where a, b in R is not maximal?

// left ideal (j) is maximal?
// left ideal (i + j) is maximal?
// left ideal (1 + i + j + k) is maximal?