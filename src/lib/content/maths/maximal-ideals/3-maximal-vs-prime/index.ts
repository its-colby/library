import * as T from "$lib/book";

const introduction = [
    T.Prose.parse(`
        This subchapter examines the relationship between maximal and prime ideals.
    `),
    T.List.numbered([
        T.Prose.parse(`
            In the first section, we demonstrate, via example, that some prime ideals are not maximal.
        `),
        T.Prose.parse(`
            In the second section, we prove the following proposition: every maximal ideal is prime. This result lets us apply any property of prime ideals to maximal ideals.
        `),
        T.Prose.parse(`
            In the third section, we demonstrate a ring where an equivalence between prime ideals and maximal ideals does exist, namely, Boolean rings.
        `),
    ]),
]


import { chapter as c1 } from "./1-not-every-prime-is-maximal";
import { chapter as c2 } from "./2-every-maximal-is-prime";
import { chapter as c3 } from "./3-primes-are-maximal-in-boolean-rings";

export const chapter = T.BookChapter.from_subchapters({
    title: T.Prose.parse(`Maximal vs. Prime Ideals`),
    introduction: introduction,
    subchapters: [ c1, c2, c3 ],
});

// Every maximal two-sided ideal is prime; converse false


// non-commutative rings? ? ? ?