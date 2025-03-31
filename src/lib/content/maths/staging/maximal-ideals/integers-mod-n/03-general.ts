import * as T from "$lib/book";

export const general_form = T.BookChapter.from_exposition([
    new T.List([
        T.Prose.parse(`
            TBD
        `),
    ]),
], T.Prose.parse(`General Form of $$\\mathbb{Z}/n\\mathbb{Z}$$`));
    