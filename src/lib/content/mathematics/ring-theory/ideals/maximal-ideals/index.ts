import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";

import { chapter as c1 } from "./z-polynomials";
import { chapter as c2 } from "./quaternions";
import { chapter as c3 } from "./weyl";

const introduction = [
    T.Prose.parse(`
        TBD
    `),
];

export const chapter = T.BookChapter.new_document({
    introduction: introduction,
    chapters: [c1, c2, c3],
    title: "Maximal Ideals",
});

export const page = Webpage.from_chapter(chapter);