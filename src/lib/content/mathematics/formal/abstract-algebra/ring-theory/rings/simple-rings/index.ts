import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        A simple ring is a ring that has no proper ideals.
    `),
], T.Prose.parse(`Simple Rings`));

export const page = Webpage.from_chapter(chapter);