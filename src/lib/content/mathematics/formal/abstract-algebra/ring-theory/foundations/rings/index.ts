import * as T from "$book";
import { File } from "$directory";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        A ring is a set equipped with two binary operations, addition and multiplication, satisfying certain properties.
    `),
], T.Prose.parse(`Rings`));

export const file = File.from_chapter(chapter);
