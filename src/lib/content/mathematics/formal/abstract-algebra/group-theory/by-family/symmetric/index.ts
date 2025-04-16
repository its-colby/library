import * as T from "$book";
import { File } from "$directory";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        Symmetric groups.
    `),
], T.Prose.parse(`Symmetric Groups`));

export const file = File.from_chapter(chapter);

// some roots of polynomials