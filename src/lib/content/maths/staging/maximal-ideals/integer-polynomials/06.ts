import * as T from "$lib/book";

export const chapter_6 = T.BookChapter.from_exposition([
    T.Prose.parse(`
        TBD
    `),

],
    T.Prose.parse(`General Form of $$\\mathbb{Z}[x]$$`)
);


// prove p must be contained in the ideal
// prove non-constant p must be in the ideal
// prove the non-constant p must be irreducible mod p
// prove that any further constant or non-constant would be unital