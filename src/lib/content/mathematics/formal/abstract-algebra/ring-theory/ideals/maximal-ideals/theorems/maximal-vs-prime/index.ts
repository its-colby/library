import * as T from "$book";

const introduction = [
    T.Prose.parse(`
        This chapter examines the relationship between maximal and prime ideals.
    `),
    T.List.numbered([
        T.Prose.parse(`
            In the first subchapter, we demonstrate, via example, that some prime ideals are not maximal.
        `),
        T.Prose.parse(`
            In the second subchapter, we prove the following proposition: every maximal ideal is prime. This result lets us apply any property of prime ideals to maximal ideals.
        `),
    ]),
]


import { chapter as c1 } from "./1-not-every-prime-is-maximal";
import { chapter as c2 } from "./2-every-maximal-is-prime";

export const chapter = new T.BundledChapters({
    title: T.Prose.parse(`Maximal vs. Prime Ideals`),
    introduction: introduction,
    subchapters: [ c1, c2 ],
});

// Every maximal two-sided ideal is prime; converse false


// non-commutative rings? ? ? ?