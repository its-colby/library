import { Webpage } from "../../utils";
import * as T from "$lib/book";
import { modules } from "./modules";
import { radicals } from "./radicals";
import { prime_ideals } from "./prime-ideals";

export const staging_webpage = new Webpage({
    title: "Staging",
    url: "/mathematics/staging",
    published: true,
});

export const staging_document = T.BookChapter.new_document({
    chapters: [
        modules,
        radicals,
        prime_ideals,
    ],
    title: staging_webpage.title
});


// TODO:
// - bezout domain, gcd domain, integrally closed domain
//  noetherian, artinian, skew field, fractioanl, group ring, burnside rings, hilberts theorems, resultants, hensel's lemma, irreducibility/factorization, krull domain, lattice




/*
Algebraic Varieties
- algebraic sets
- Hilbert's Nullstellensatz 
- Many algebraic varieties are differentiable manifolds, 
-  Algebraic varieties can be characterized by their dimension. 
- Algebraic varieties of dimension one are called algebraic curves and algebraic varieties of dimension two are called algebraic surfaces.
- Projective varieties and quasi-projective varieties
- Affine varieties

Algebraic Curves
- bezouts theorem
- The study of algebraic curves can be reduced to the study of irreducible algebraic curves: those curves that cannot be written as the union of two smaller curves.
- Up to birational equivalence, the irreducible curves over a field F are categorically equivalent to algebraic function fields in one variable over F.


topological space
- limits
- continuity
- connectedness
- open sets
- closed sets
- discrete topology
- neighborhood


manifolds



euclidean spaces


metric spaces




Ordinality
- limit ordinals
- successor ordinals



Ordering
- well-ordering
-partially ordered



Axiom of Choice
- Zorn's Lemma
- well-ordering theorem



Integral Domain
- A commutative ring (with unity) is an integral domain if and only if (0) is a prime ideal.


principal ideals


Minimal Ideals
- In a ring with unity, maximal right ideals always exist. In contrast, minimal right, left, or two-sided ideals in a ring with unity need not exist.
*/






// groups

// galois

// number systems

// number theory

// algebraic geometry

// topology

// clean-up