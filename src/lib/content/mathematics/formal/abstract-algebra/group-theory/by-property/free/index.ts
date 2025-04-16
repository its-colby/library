import * as T from "$book";
import { File } from "$directory";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        Free groups.
    `),
], T.Prose.parse(`Free Groups`));

export const file = File.from_chapter(chapter);