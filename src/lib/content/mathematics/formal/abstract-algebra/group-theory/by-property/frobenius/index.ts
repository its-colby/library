import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        TBD 
    `),
], T.Prose.parse(`Frobenius Groups`));

export const page = Webpage.from_chapter(chapter);