import * as T from "$book";

const introduction = [
    T.Prose.parse(`
        TBD
    `),
];


export const chapter = T.BookChapter.from_subchapters({
    introduction: introduction,
    subchapters: [

    ],
    title: T.Prose.parse(`Examples in Weyl Algebras`)
});

// x contained in (x, 1 +xD)
// D contained in (D, xD - 1)