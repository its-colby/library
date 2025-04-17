import * as T from "$book";
import { File } from "$directory";

export const chapter = T.Exposition.as_book([
    T.Prose.parse(`
        An Artinian ring is a ring that satisfies the descending chain condition on (one-sided) ideals; 
        every non-empty set of ideals has a minimal element.
    `),
], T.Prose.parse(`Artinian Rings`));

export const file = File.from_chapter(chapter);

// an Artinian ring (sometimes Artin ring) is a ring that satisfies the descending chain condition on (one-sided) ideals; 
// every non-empty set of ideals has a minimal element
// Finite rings are Artinian only?


// Artinian implies Noetherian (but not vice versa).
// A commutative ring is Artinian if and only if it is Noetherian and has Krull dimension 0 (every prime ideal is maximal).

// Artinian rings are “finite” in a strong sense: they have finitely many maximal ideals, and their Jacobson radical is nilpotent.

// Z is not Artinian, but Noetherian.
// 8 sub 4 sub 2 sub 1
// but 2 parent 4 parent 8 parent ...

// Z/4Z is Artinian and noetherian

// k[a, b, c, ...] is not Artinian, nor noetherian

// While Noetherian rings control growth upward (limiting how big ideals can get), Artinian rings control shrinkage downward (limiting how small ideals can get).

// Finitely Many Maximal Ideals: The ring has only a finite number of “top-level” ideals (maximal ideals), and their product (the Jacobson radical) is nilpotent—eventually powers to zero.

// Decomposition: They’re isomorphic to a finite product of local Artinian rings (e.g., 



