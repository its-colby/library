import * as T from "$book";
import { File } from "$directory";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        A Noetherian ring is a ring that satisfies the ascending chain condition on (one-sided) ideals; 
        every non-empty set of ideals has a maximal element.
    `),
], T.Prose.parse(`Noetherian Rings`));

export const file = File.from_chapter(chapter);


/*
Noetherian Rings
- If R is a Noetherian ring, then the polynomial ring  Hilbert's basis theorem.
- If R is a Noetherian ring and I is a two-sided ideal, then the quotient ring R/I is also Noetherian.
- Every finitely-generated commutative algebra over a commutative Noetherian ring is Noetherian.
- Every localization of a commutative Noetherian ring is Noetherian.



*/