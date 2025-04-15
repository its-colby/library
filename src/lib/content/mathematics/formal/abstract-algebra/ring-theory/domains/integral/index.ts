import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        An integral domain is a ring that satisfies the integral domain condition on ( one-sided) ideals.
    `),
], T.Prose.parse(`Integral Domains`));

export const page = Webpage.from_chapter(chapter);