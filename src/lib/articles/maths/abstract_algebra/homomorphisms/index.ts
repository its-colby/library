// notes
// modular reduction
// polynomial evaluation
// complex conjugation
// frobenius map
// determinant
// norm of vector

// homomorphism - preseverse operations

// kernel - mapping to identity

// Monomorphisms - Injective
// ----- Z -> Q (not surjective)
// ----- Z -> 2Z (not surjective)

// Epimorphisms - Surjective
// ----- Z -> Z/nZ (not injective)
// ------ f(x, y) = x (not injective)

// Isomorphisms - Bijective
// ----- Z/6Z -> Z/2Z x Z/3Z
// ----- f(a + bi) = (a, b)

// Automorphisms - Bijective, to itself
// ----- f(a + bi) = a - bi

// Endomorphisms - Domain equals Codomain


// Non-homomorphisms
// -------- e^x
// -------- absolute value


// generators / order, basis, quotient structures, free objects, 



import { Inline, Section, Title } from "$lib/tex";
import { FUNCTION } from "./function";
import { DEFINITION } from "./definition";
import { MONOMORPHISM } from "./monomorphism";
import { EPIMORPHISM } from "./epimorphism";
import { ISOMORPHISM } from "./isomorphism";
import { AUTOMORPHISM } from "./automorphism";
import { ENDOMORPHISM } from "./endomorphism";
export const HOMOMORPHISMS = new Section({
    title: new Title({
        value: "Homomorphisms",
    }),
    sections: [
        FUNCTION,
        DEFINITION,
        ISOMORPHISM,
        AUTOMORPHISM,
        MONOMORPHISM,
        EPIMORPHISM,
        ENDOMORPHISM,
    ]
})