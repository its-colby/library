import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        A prime ideal is a proper ideal that is prime.
    `),
], T.Prose.parse(`Prime Ideals`));

export const page = Webpage.from_chapter(chapter);