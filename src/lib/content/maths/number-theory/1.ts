import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        TBD
    `),

], T.Prose.parse(`Fermat's Little Theorem`));