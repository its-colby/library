import * as T from "$book";
import { jacobson_radical } from "./jacobson-radical";
import { nilradical } from "./nilradical";
import { reduced_ring } from "./reduced-ring";
import { radical_ideal } from "./semiprime-ideal";

export const radicals = T.BookChapter.from_subchapters({
    subchapters: [
        reduced_ring,
        nilradical,
        jacobson_radical,
        radical_ideal,
    ],
    title: T.Prose.parse(`Radicals`),
});

/*
Radicals
- semiprimes

- nilradical
-  radicalization is an idempotent operation. 
-  the radical of a prime ideal is equal to itself. 
- nil ideal
- nilpotent ideal
- intersection of prime ideals
*/


