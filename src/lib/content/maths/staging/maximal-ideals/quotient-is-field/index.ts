import * as T from "$lib/tex";

export const quotient = [

    new T.List([
        T.Inline.parse(`
            Let $$\\mathcal{A}$$ be an ideal in the unital commutative ring $$\\mathcal{R}$$. Let us find an $$\\mathcal{A}$$, where $$\\mathcal{R} / \\mathcal{A}$$ is a field. The goal is for all elements of $$\\mathcal{R} / \\mathcal{A}$$ to have multiplicative inverses.
        `),
        T.Inline.parse(`
            Every element of $$\\mathcal{R} / \\mathcal{A}$$ is of the form $$r + a$$ where $$r \\in \\mathcal{R}$$ and $$a \\in \\mathcal{A}$$.
        `),
        T.Inline.parse(`
            If all nonzero elements need multiplicative inverses, then for any $$r$$, we need an inverse $$d \\in \\mathcal{R}$$, such that $$rd + a = 1$$.
        `),
        T.Inline.parse(`
            $$rd + a = 1$$ can be read as an ideal, interestingly enough. $$\\langle r , \\mathcal{A} \\rangle$$, where elements are of the form $$r \\cdot d + m$$. However, this would imply that $$1 \\in \\langle r , \\mathcal{A} \\rangle$$, which means it must be a unital ideal. When would this equality happen? when $$r \\notin \\mathcal{A}$$ and $$\\mathcal{A}$$ is maximal.
        `), 
    ]),

    new T.List([
        T.Inline.parse(`
            Let $$\\mathcal{M}$$ be a maximal ideal in the unital commutative ring $$\\mathcal{R}$$.
        `),
        T.Inline.parse(`
            Since $$\\mathcal{M} \\subset \\mathcal{R}$$, there exists an element $$r \\in \\mathcal{R}$$ that is not in $$\\mathcal{M}$$.
        `),
        T.Inline.parse(`
            Define the ideal $$\\langle r, \\mathcal{M} \\rangle$$, where elements are of the form $$r \\cdot a + m$$, where $$a \\in \\mathcal{R}$$ and $$m \\in \\mathcal{M}$$.
        `),
        T.Inline.parse(`
             $$\\langle r, \\mathcal{M} \\rangle$$ must be larger than $$\\mathcal{M}$$, since $$r \\notin \\mathcal{M}$$. However, the only ideal larger than $$\\mathcal{M}$$, by definition of a maximal ideal, is $$\\langle 1 \\rangle$$. Therefore, $$\\langle r, \\mathcal{M} \\rangle = \\langle 1 \\rangle$$.
        `),
        T.Inline.parse(`
            This means that there exists an element $$a \\in \\mathcal{R}$$ and $$m \\in \\mathcal{M}$$ such that $$r \\cdot a + m = 1$$.
        `),
        T.Inline.parse(`
            If we quotient $$\\mathcal{R}$$ by $$\\mathcal{M}$$, we get a ring $$\\mathcal{R} / \\mathcal{M}$$ In this ring, $$m \\equiv 0$$. Therefore, $$r \\cdot a + m = 1$$ becomes $$r \\cdot a = 1$$.
        `),
        T.Inline.parse(`
            This means that $$r$$ and $$a$$ are multiplicatively invertible in $$\\mathcal{R} / \\mathcal{M}$$.
        `),
    ])
];


//  residue field
// This fact can fail in non-unital or non-commutative rings.

// 5 * x = 1 mod 7
// 
// sr = 1 mod m, for any s, there is always an r such that we can get the product to be 1 more than a multiple of m.

// new hypothesis, members of the complement either share a common factor and thus get reduced to 0, or they don't share a common factor and thus have a multiplicative inverse? idk


// m = 2(0) + (x + 1)(x +5) = x^2 + 6x + 5
// r = x(x+5) = x^2 + 5x


// in a non-maximal ideal, you may get "trapped" in a larger ideal that isn't the ring, which means you can't "reach" any unit, such as 1?

// non-(2) * (non-2) + 2 = x
// if both non-2s come from a larger ideal that includes 2, then by definition, the product is trapped in that larger ideal, and can't be 1. KEY KEY KEY

// for what quotient, in my quotient ring, will i get mult. inverses?
// well, I need, given an elt outside that ideal and given the gen of that ideal, i need to find two elts that will get me to 1. And, what does this look like? it looks like an ideal, namely the unital-ideal, so will one extra element do? well, only if im maximal


// quotient by a prime ideal? what happens
// are elements outside of prime ideal coprime to the ideal?
// are all maximal ideals also prime ideals? (I think so)