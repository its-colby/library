import * as T from "$book";
import { File } from "$directory";

const introduction = [
    T.Prose.parse(`
        TBD
    `),
];


import { chapter as c1 } from "./1-trivial-cases";
import { chapter as c2 } from "./2-p-adics";
import { chapter as c3 } from "./3-localizations";

export const chapter = new T.BundledChapters({
    introduction: introduction,
    subchapters: [
        c1,
        c2,
        c3,
    ],
    title: T.Prose.parse(`Local Rings`),
    is_book: true,
});

export const file = File.from_chapter(chapter);

// The coordinate ring of an affine algebraic variety at a point
//  The ring of germs of functions at a point:
// The local ring of a curve at a point:
// The ring of integers in a local field:
// The ring of localizations of a commutative ring at a prime ideal:
// The ring of formal power series over a field: