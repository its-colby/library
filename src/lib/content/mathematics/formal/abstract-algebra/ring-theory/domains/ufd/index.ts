import * as T from "$book";
import { File } from "$directory";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        A unique factorization domain is a ring that satisfies the unique factorization condition on (one-sided) ideals; 
    `),
], T.Prose.parse(`Unique Factorization Domains`));

export const file = File.from_chapter(chapter);

/*


UFDs
- All principal ideal domains, hence all Euclidean domains, are UFDs
- If R is a UFD, then so is R[X], the ring of polynomials with coefficients in R. Unless R is a field, R[X] is not a principal ideal domain.
- In UFDs, every irreducible element is prime. (In any integral domain, every prime element is irreducible, but the converse does not always hold.
- Any two elements of a UFD have a greatest common divisor and a least common multiple. 
- many equivalent definitions




*/