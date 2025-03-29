import * as T from "$lib/tex";

const maximal_ideal = new T.Inline([
    `A "maximal ideal" is a proper ideal that is not contained within any other proper ideal.`,
]);


import { z } from "./maximal-ideals/z";
import { z_x } from "./maximal-ideals/z_x";
import { quotient } from "./maximal-ideals/quotient";
export const MAXIMAL_IDEALS = T.Section.from_content([
    ...z,
    ...z_x,
    ...quotient,
], "Maximal Ideals");


const a = T.Inline.parse(`
    We will now understand and prove the following theorem: In any principal ideal domain (PID), for every nonzero ideal $$\\mathfrak{I}$$, the ideal $$\\mathfrak{I}$$ is prime if and only if it is maximal.
`);

const c = T.Inline.parse(`
    Here are some concrete implications of this theorem.
`);

const d = new T.List([
    T.Inline.parse(`
        Consider the PID $$\\mathbb{Z}$$, the ideals $$\\langle 2 \\rangle$$, $$\\langle 3 \\rangle$$, and $$\\langle p \\rangle$$ (where $$p$$ is a prime number), are maximal. Note, $$\\langle 0 \\rangle \\subsetneq \\langle p \\rangle$$ and thus $$\\langle 0 \\rangle$$ is not maximal, despite being prime.
    `),
    T.Inline.parse(`
        Consider the non-PID $$\\mathbb{R}[x,y]$$ and two of its ideals, $$\\langle x \\rangle$$ and $$\\langle x,y \\rangle$$. Both of these ideals are prime, but only $$\\langle x,y \\rangle$$ is maximal.
    `),
]);

// in any commutative ring with unity, every maximal ideal is automatically prime (that is not a zero ring)


const ddd = new T.Inline([
    `Let's demonstrate that, within the ring of integers, `, new T.Tex(`\\mathbb{Z}`), `, the ideals `, new T.Tex(`\\langle 2 \\rangle , \\langle 5 \\rangle`), ` and more generally, `, new T.Tex(`\\langle p \\rangle`), `(where `, new T.Tex(`p`), ` is a prime number), are maximal ideals.`,
])

const b = new T.List([
    new T.Inline([`Let's assume that `, new T.Tex(`\\langle p \\rangle`), ` is not a maximal ideal. This means that there exists some ideal `, new T.Tex(`\\mathfrak{m}`), ` such that `, new T.Tex(`\\langle p \\rangle \\subsetneq \\mathfrak{m} \\subsetneq \\mathbb{Z}`), `.`,
    ]),
]);


// Every nonzero ring contains at least one prime ideal (in fact it contains at least one maximal ideal), which is a direct consequence of Krull's theorem.

// (p) -- good
// (p, f (irreducible mod p)) -- good
// (6) -- bad
// right left maximals?
// purpose - quotient by maximal is simple ring or field?
// prove maximality (assume not maximal, derive contradiction showing other maximal ideal is unit ideal
// can also prove via quotient ring
// No, prime ideals are not always maximal ideals in general. However, every maximal ideal is prime, but the converse is not always true. Let's break this down carefully.