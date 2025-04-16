// Z-module Z/nZ
// ----- 3 * [4] + 20 * [5] mod n
// ----- quotient module of Z-module Z
// ----- submodules are subgroups of Z/nZ (kz/nz where k is divisor of n)
// ----- 4z/12z = {0, 4, 8}, 3z/12z = {0, 3, 6, 9}, ...
// ----- torsion module (every element is torsion)
// ----- simple iff n is prime
// ----- no basis
// ----- Ann([a]) = {r in R | r * [a] = 0}
// ----- In Z/6Z, Ann([1]) = 6Z, Ann([2]) = 3Z, Ann([3]) = 2Z, Ann([4]) = 3Z, Ann([5]) = 6Z

import * as T from "$book";

export const chapter_1 = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Let $$n$$ be a composite number and consider $$\\mathbb{Z}/n\\mathbb{Z}$$ as a $$\\mathbb{Z}$$-module.
        `),
        T.Prose.parse(`
            For any element $$[a] \\in \\mathbb{Z}/n\\mathbb{Z}$$, we have $$n \\cdot [a] = [na] = [0]$$.
        `),
        T.Prose.parse(`
            This shows every element has a non-zero annihilator (at least $$n$$), making $$\\mathbb{Z}/n\\mathbb{Z}$$ a torsion module.
        `),
        T.Prose.parse(`
            For any $$[a] \\in \\mathbb{Z}/n\\mathbb{Z}$$, its annihilator is $$\\text{Ann}([a]) = \\{r \\in \\mathbb{Z} \\ | \\ r \\cdot [a] = [0]\\} = \\frac{n}{\\gcd(a,n)}\\mathbb{Z}$$.
        `),
        T.Prose.parse(`
            For example, in $$\\mathbb{Z}/6\\mathbb{Z}$$:
            - $$\\text{Ann}([1]) = 6\\mathbb{Z}$$ (since $$\\gcd(1,6) = 1$$)
            - $$\\text{Ann}([2]) = 3\\mathbb{Z}$$ (since $$\\gcd(2,6) = 2$$)
            - $$\\text{Ann}([3]) = 2\\mathbb{Z}$$ (since $$\\gcd(3,6) = 3$$)
            - $$\\text{Ann}([4]) = 3\\mathbb{Z}$$ (since $$\\gcd(4,6) = 2$$)
            - $$\\text{Ann}([5]) = 6\\mathbb{Z}$$ (since $$\\gcd(5,6) = 1$$)
        `),
    ]),
], 
    T.Prose.parse(`Proving $$\\mathbb{Z}/n\\mathbb{Z}$$`)
);