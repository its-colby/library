import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";

const introduction = [
    T.Prose.parse(`
        TBD
    `),
];


import { chapter as c1 } from "./1-trivial-cases";
import { chapter as c2 } from "./2-p-adics";
import { chapter as c3 } from "./3-localizations";

export const chapter = T.BookChapter.from_subchapters({
    introduction: introduction,
    subchapters: [
        c1,
        c2,
        c3,
    ],
    title: T.Prose.parse(`Local Rings`)
});

export const page = Webpage.from_chapter(chapter);

// The coordinate ring of an affine algebraic variety at a point
//  The ring of germs of functions at a point:
// The local ring of a curve at a point:
// The ring of integers in a local field:
// The ring of localizations of a commutative ring at a prime ideal:
// The ring of formal power series over a field: