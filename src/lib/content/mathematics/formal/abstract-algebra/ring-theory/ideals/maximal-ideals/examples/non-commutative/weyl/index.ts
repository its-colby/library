import * as T from "$book";

const introduction = [
    T.Prose.parse(`
        TBD
    `),
];


export const chapter = new T.BundledChapters({
    introduction: introduction,
    subchapters: [

    ],
    title: T.Prose.parse(`Examples in Weyl Algebras`)
});

// x contained in (x, 1 +xD)
// D contained in (D, xD - 1)