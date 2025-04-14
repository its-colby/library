import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        A boolean ring is a ring where every element is idempotent.
    `),
], T.Prose.parse(`Boolean Rings`));

export const page = Webpage.from_chapter(chapter);