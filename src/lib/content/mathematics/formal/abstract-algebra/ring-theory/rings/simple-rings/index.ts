import * as T from "$book";
import { File } from "$directory";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        A simple ring is a ring that has no proper ideals.
    `),
], T.Prose.parse(`Simple Rings`));

export const file = File.from_chapter(chapter);