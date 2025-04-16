import * as T from "$book";
import { File } from "$directory";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        A Euclidean domain is a ring that satisfies the Euclidean algorithm.
    `),
], T.Prose.parse(`Euclidean Domains`));

export const file = File.from_chapter(chapter);
/*

Eculiden Domins
- All Euclidean domains are principal ideal domains, but the converse is not true. 
- euclidean function
- a Euclidean domain may admit many different Euclidean functions.



*/