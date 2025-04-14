import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        Free groups.
    `),
], T.Prose.parse(`Free Groups`));

export const page = Webpage.from_chapter(chapter);