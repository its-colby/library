import * as T from "$lib/tex";

// a ring with finitely many generators per ideal
// ascending chain condition
// left vs right vs two sided noetherian
// Every non-empty set of left ideals of R, partially ordered by inclusion, has a maximal element.


// maybe depends on quotient rings (swap them?)

const noetherian_ring_purpose = T.Inline.parse(`
    The purpose of a "noetherian ring" is to capture a restriction on the generators of ideals for Dedekind domains. Namely, for dedekind domains, every ideal must be finitely generated.
`);

const noetherian_ring_definition = T.Inline.parse(`
    The ascending chain condition essentially says that the ideals of the ring form a chain that is bounded above. In other words, there is no infinite sequence of ideals I_1 \subset I_2 \subset I_3 \subset ... There is always an ideal that is maximal in the chain.
`);

const noetherian_ring_example = T.Inline.parse(`
    Lets prove that the ascending chain condition iff every ideal is finitely generated.
`);

const noetherian_ring_example_continued = T.Inline.parse(`
    The ring of integers is noetherian because every ideal is finitely generated.
`);

const noetherian_counterexample = T.Inline.parse(`
    The ring of polynomials with infinitely many variables is not noetherian because there is an infinite chain of ideals.
`);

const hilbert_basis_theorem = T.Inline.parse(`
    If R is a noetherian ring, then R[x] is noetherian.
`);

const hilbert_basis_theorem_continued = T.Inline.parse(`
    If R is a noetherian ring, then R /I is noetherian.
`);

// Hilbert Basis Theorem

