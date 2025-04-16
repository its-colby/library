import * as T from "$book";
import { File } from "$directory";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        TBD 
    `),
], T.Prose.parse(`Number Theoretic Transforms`));

export const file = File.from_chapter(chapter);