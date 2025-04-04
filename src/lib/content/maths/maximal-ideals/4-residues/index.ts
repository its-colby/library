import * as T from "$lib/book";

const introduction = [
    T.Prose.parse(`
        This chapter examines the residues of 
    `),
];

import { chapter as c1 } from "./1-residue-fields";
import { chapter as c2 } from "./2-simple-rings";
import { chapter as c3 } from "./3-simple-modules";
import { chapter as c4 } from "./4";

export const chapter = T.BookChapter.from_subchapters({
    title: T.Prose.parse(`Quotienting by Maximal Ideals`),
    introduction: introduction,
    subchapters: [c1, c2, c3, c4],
});

// simple rings for two sided ideals
// simple modules (abelian groups) for one sided ideals






//  residue field
// This fact can fail in non-unital or non-commutative rings.

// 5 * x = 1 mod 7
// 
// sr = 1 mod m, for any s, there is always an r such that we can get the product to be 1 more than a multiple of m.

// new hypothesis, members of the complement either share a common factor and thus get reduced to 0, or they don't share a common factor and thus have a multiplicative inverse? idk


// m = 2(0) + (x + 1)(x +5) = x^2 + 6x + 5
// r = x(x+5) = x^2 + 5x


// in a non-maximal ideal, you may get "trapped" in a larger ideal that isn't the ring, which means you can't "reach" any unit, such as 1?

// non-(2) * (non-2) + 2 = x
// if both non-2s come from a larger ideal that includes 2, then by definition, the product is trapped in that larger ideal, and can't be 1. KEY KEY KEY

// for what quotient, in my quotient ring, will i get mult. inverses?
// well, I need, given an elt outside that ideal and given the gen of that ideal, i need to find two elts that will get me to 1. And, what does this look like? it looks like an ideal, namely the unital-ideal, so will one extra element do? well, only if im maximal


// quotient by a prime ideal? what happens
// are elements outside of prime ideal coprime to the ideal?
// are all maximal ideals also prime ideals? (I think so)