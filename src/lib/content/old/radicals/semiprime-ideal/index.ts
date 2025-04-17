import * as T from "$book";

export const radical_ideal = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            In $$\\mathbb{Z}$$, consider the ideal $$\\langle 12 \\rangle = \\{12k : k \\in \\mathbb{Z}\\}$$. Since $$12 = 2^2 \\cdot 3$$, the radical $$\\sqrt{\\langle 12 \\rangle} = \\langle 6 \\rangle = \\langle 2 \\cdot 3 \\rangle$$. This ideal is not radical since $$\\sqrt{\\langle 12 \\rangle} \\neq \\langle 12 \\rangle$$. However, $$\\langle 6 \\rangle$$ is a radical ideal since $$\\sqrt{\\langle 6 \\rangle} = \\langle 6 \\rangle$$ (as 6 is square-free).
        `),
        T.Prose.parse(`
            In $$\\mathbb{Z}[x]$$, consider the ideal $$\\langle x^2 \\rangle$$. The radical $$\\sqrt{\\langle x^2 \\rangle} = \\langle x \\rangle$$. This ideal is not radical, but $$\\langle x \\rangle$$ is a radical ideal since $$\\sqrt{\\langle x \\rangle} = \\langle x \\rangle$$. In fact, $$\\langle x \\rangle$$ is prime, and all prime ideals are radical ideals.
        `),
        T.Prose.parse(`
            In $$\\mathbb{Z}[x]$$, the ideal $$\\langle x^2 + 1, 2x \\rangle$$ has radical $$\\sqrt{\\langle x^2 + 1, 2x \\rangle} = \\langle x, 1 \\rangle = \\mathbb{Z}[x]$$. The unit ideal $$\\mathbb{Z}[x]$$ is always a radical ideal. Note that $$\\langle x^2 + 1, 2x \\rangle$$ itself is not radical.
        `),
        T.Prose.parse(`
            In $$\\mathbb{Z}[x,y]$$, consider $$\\langle x^2y^3 \\rangle$$. The radical $$\\sqrt{\\langle x^2y^3 \\rangle} = \\langle xy \\rangle$$. Neither $$\\langle x^2y^3 \\rangle$$ nor $$\\langle xy \\rangle$$ are radical ideals, as $$\\langle xy \\rangle$$ can be further decomposed into the intersection of prime ideals $$\\langle x \\rangle \\cap \\langle y \\rangle$$.
        `),
        T.Prose.parse(`
            In $$\\mathbb{Z}/8\\mathbb{Z}$$, consider the ideal $$\\langle 4 \\rangle = \\{0, 4\\}$$. The radical $$\\sqrt{\\langle 4 \\rangle} = \\langle 2 \\rangle = \\{0, 2, 4, 6\\}$$. Here, $$\\langle 4 \\rangle$$ is not radical, but $$\\langle 2 \\rangle$$ is a radical ideal since $$\\sqrt{\\langle 2 \\rangle} = \\langle 2 \\rangle$$.
        `),
    ]),
    new T.List([
        T.Prose.parse(`
            Key observations about radical ideals:
        `),
        T.Prose.parse(`
            1. Every prime ideal is a radical ideal
        `),
        T.Prose.parse(`
            2. In $$\\mathbb{Z}$$, an ideal $$\\langle n \\rangle$$ is radical if and only if n is square-free
        `),
        T.Prose.parse(`
            3. The zero ideal is radical if and only if the ring has no nilpotent elements
        `),
        T.Prose.parse(`
            4. The intersection of radical ideals is again a radical ideal
        `),
    ]),
],
    T.Prose.parse(`Examples of Radicals and Radical Ideals`)
);












/*
For example, in the ring of integers, the semiprime ideals are the zero ideal, along with those ideals of the form 
n
Z
{\displaystyle n\mathbb {Z} } where n is a square-free integer.


Semiprime rings (rings with zero radical) have well-behaved module categories.
The radical I\sqrt{I}\sqrt{I}
 captures elements that are "nilpotent modulo ( I ),



semiprime ring

equivalent conditions
If x^k is in A for some positive integer k and element x of R, then x is in A.
If y is in R but not in A, all positive integer powers of y are not in A.

The ring R is called a semiprime ring if the zero ideal is a semiprime ideal.

a semiprime primary ideal is prime.

an ideal A is semiprime if and only if 
A
=
A
{\displaystyle {\sqrt {A}}=A}. At this point, it is also apparent that every semiprime ideal is in fact the intersection of a family of prime ideals. 
*/