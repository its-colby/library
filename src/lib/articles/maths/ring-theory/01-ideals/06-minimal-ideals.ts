import * as T from "$lib/tex";

const minimal_ideal = new T.Inline([
    `A "minimal ideal" is a proper ideal that contains no other proper ideals.`,
]);


// this might be a little complicated and depend on more stuff
// Z/4Z -> (2) is minimal
// Z has no minimal ideals
// polynomial ring has no minimal ideals
// Minimal ideals help in decomposing rings into simpler components.
// In Artinian rings, minimal ideals always exist, and they help classify the ring's structure.



// Since M_2(C) decomposes into a direct sum of minimal left ideals, it is a semisimple ring, left zeros, right zeros
// Domains that are not division rings have no minimal right ideals