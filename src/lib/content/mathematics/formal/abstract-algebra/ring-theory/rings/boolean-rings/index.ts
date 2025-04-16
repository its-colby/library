import * as T from "$book";
import { File } from "$directory";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        A boolean ring is a ring where every element is idempotent.
    `),
], T.Prose.parse(`Boolean Rings`));

export const file = File.from_chapter(chapter);