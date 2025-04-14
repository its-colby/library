import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        Symmetric groups.
    `),
], T.Prose.parse(`Symmetric Groups`));

export const page = Webpage.from_chapter(chapter);

// some roots of polynomials