import * as T from "$lib/tex";

const kernel_is_ideal = T.Inline.parse(`
    The kernel of a ring homomorphism is always an ideal.
`);

const quotient_ring_purpose = T.Inline.parse(`
    The purpose of a "quotient ring" is a specific instance of the term "congruence relation", but applied to groups. It captures the idea of congruent elements by modding out an ideal..
`);

const quotient_ring_subring = T.Inline.parse(`
    The quotient ring of any ideal is a subring of the original ring.
`);

const first_isomorphism_theorem = T.Inline.parse(`
    The first isomorphism theorem states that the image of a ring homomorphism is isomorphic to the quotient ring of the kernel of the ring homomorphism. For example, 
`);

const first_isomorphism_theorem_continued = T.Inline.parse(`
    If the homormorphism is an epimorphism (surjective), then the quotient ring of the kernel is isomorphic to the S. image of z/6z to z/3z is 0, 1, 2,but kernel is 0, 2, 4
`);




// kernel is an ideal?
// o
// formalize congruent relations?
// image of z/6z to z/3z is 0, 1, 2,
// but kernel is 0, 2, 4
// This means that we can construct new rings as quotients of existing rings.
// kernel is iso to 0, 1, 2

// Clearly, if R is a commutative ring, then so is R/I; the converse, however, is not true in general.