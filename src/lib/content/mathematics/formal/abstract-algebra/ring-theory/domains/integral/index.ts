import * as T from "$book";
import { File } from "$directory";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        An integral domain is a ring that satisfies the integral domain condition on ( one-sided) ideals.
    `),
], T.Prose.parse(`Integral Domains`));

export const file = File.from_chapter(chapter);