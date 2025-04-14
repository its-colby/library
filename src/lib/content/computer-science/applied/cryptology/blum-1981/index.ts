import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        Blum.
    `),
], T.Prose.parse(`Blum 1981`));

export const page = Webpage.from_chapter(chapter);