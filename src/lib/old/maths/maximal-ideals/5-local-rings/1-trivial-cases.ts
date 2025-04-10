import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        Trivial cases: fields, skew fields, and simple rings.
    `),
], 
    T.Prose.parse(`Trivial Cases: Fields, Skew Fields, & Simple Rings`)
);