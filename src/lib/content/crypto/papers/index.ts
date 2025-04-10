import * as T from "$lib/book";

const blum_1983 = [
    T.Prose.parse(`
        (1983) Coin Flipping by Telephone: A Protocol for Solving Impossible Problems by Manuel Blum
    `),
    new T.List([
        T.Prose.parse(`
            The concept of a coin-flipping protocol between two probabilistic polynomial-time adversaries, Alice and Bob, is introduced.
        `),
        T.List.numbered([
            T.Prose.parse(`
                Alice commits to a sequence of bits (her 'coin flips')
            `),
            T.Prose.parse(`
                Bob guesses Alice's sequence of bits (his 'coin flips')
            `),
            T.Prose.parse(`
                Alice reveals her sequence of bits
            `),
        ]),
        T.Prose.parse(`
            Two desired security properties of the above protocol are introduced.
        `),
        T.List.numbered([
            T.Prose.parse(`
                Bob cannot guess any of Alice's bits with probability negligibly better than 50%.
            `),
            T.Prose.parse(`
                Bob can detect whether Alice reveals a different sequence of bits than she committed to.
            `),
        ]),
        T.Prose.parse(`
            Blum introduces the concept of a "completely secure" one-way function: a one-way function, in which the probabilistic polynomial-time adversary deduces any non-trivial property of the input (e.g. the parity of the input), with probability negligibly better than 50%. He then shows that trivially, such a function realizes a 2-party coin-flipping protocol.
        `),
        T.Prose.parse(`
            Blum utilizes a ("normally secure") one-way function, quadratic residue, to construct the 2-party coin-flipping protocol.
        `),
    ]),
];

export const chapter = T.BookChapter.book_from_exposition([
    ...blum_1983,

], T.Prose.parse(`Chronology of Research Papers`));

import { Webpage } from "../../utils";

export const papers_webpage = new Webpage({
    title: "Chronology of Research Papers",
    url: "/cryptology/papers",
    published: true,
});


// Jacobi Symbol Notes

// (x/n) = 0 if gcd(x, n) neq 1
// --because (x/n) = (x)

// x^2 = y^2 (mod n)
// (x-y)(x+y) = kn
// if n is prime, then x-y (nonexclusive) or x+y must be divisible by n (euclids lemma)
// if n is prime, x = y (mod n) or x = -y (mod n)
// case 1, jacobi symbols same, if x = -y, then, not the same

// euler's criterion


// lagrange's theorem


// imagine an finite group ( a, b, c, ...)
// imagine a finite subgroup, it must contain one element alpha
// alpha must be less than  maximal element (or else trivial)
// lets think of all subgroups we could form
// 1, 2, 3, 4, 5, 6, 7, 8


// mod 

// g_1 h_1 = g_2 h_2 -> g_1 = g_2 h_2 h_1^-1

// a^p-1 = 1 mod p

// all generators of all subgroups must be a factor of p-1

// a ^(p-1)/2 = 1 mod p then a is a quadratic residue
// z/pz* cyclic -> quadratic residues form cyclic subgroup
// produce of squares in square
// order of this cyclic subgroup is 1/2 i guess
