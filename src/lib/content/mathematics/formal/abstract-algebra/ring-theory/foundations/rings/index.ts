import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        A ring is a set equipped with two binary operations, addition and multiplication, satisfying certain properties.
    `),
], T.Prose.parse(`Rings`));

export const page = Webpage.from_chapter(chapter);
