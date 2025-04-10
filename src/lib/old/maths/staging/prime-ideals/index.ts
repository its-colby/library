import { krull_dimension } from "./krull-dimension";
import * as T from "$lib/book";
import { prime_avoidance_lemma } from "./prime-avoidance-lemma";
import { minimal_primes } from "./minimal-primes";

export const prime_ideals = T.BookChapter.from_subchapters({
    subchapters: [
        krull_dimension,
        prime_avoidance_lemma,
        minimal_primes,
    ],
    title: T.Prose.parse(`Prime Ideals`),
});


/*
Prime Ideals
- krull dimension
- supremum
- An ideal I in the ring R (with unity) is prime if and only if the factor ring R/I is an integral domain. 
- An ideal I is prime if and only if its set-theoretic complement is multiplicatively closed.
- Every nonzero ring contains at least one prime ideal (in fact it contains at least one maximal ideal), which is a direct consequence of Krull's theorem.
- The preimage of a prime ideal under a ring homomorphism is a prime ideal, which is one reason algebraic geometers define the spectrum of a ring to be its set of prime rather than maximal ideals; one wants a homomorphism of rings to give a map between their spectra.
- The set of all prime ideals (called the spectrum of a ring) contains minimal elements (called minimal prime ideals). Geometrically, these correspond to irreducible components of the spectrum.
- Prime avoidance lemma. 


complements of prime ideals are closed under multiplication.
*/