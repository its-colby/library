import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        In this chapter, we demonstrate that being a prime ideal does not imply being a maximal ideal.
    `),

    T.Prose.parse(`
        Recall the zero ideal $$\\langle 0 \\rangle$$. It only contains one element, $$0$$. Depending on the ring, the zero ideal may have different classifications.
    `),

    new T.List([
        T.Prose.parse(`
            Recall the zero ring (also called the trivial ring). It only contains one element, $$0$$. This one element is both the additive and multiplicative identity. In any zero ring, $$\\langle 0 \\rangle = \\{ 0 \\} = \\mathcal{R}$$, and thus, $$\\langle 0 \\rangle$$ is not a proper ideal.
        `),
        T.Prose.parse(`
            Recall any simple ring $$\\mathcal{R}$$, a ring with only two two-sided ideals $$\\langle 0 \\rangle$$ and $$\\mathcal{R}$$. The zero ideal is prime
        `),
        T.Prose.parse(`
            Recall any non-simple ring, a ring with 
        `),
    ]),

    T.List.numbered([
        T.Prose.parse(`
            Recall the unital commutative ring $$\\mathbb{Z}$$. Recall the two prime ideals $$\\langle 0 \\rangle$$ and $$\\langle 2 \\rangle$$. Respectively, these ideals are defined as $$\\langle 0 \\rangle = \\{ 0 \\}$$ and $$\\langle 2 \\rangle = \\{ \\ldots, -4, -2, 0, 2, 4, \\ldots \\}$$.
        `),
        T.Prose.parse(`
            Clearly, $$0 \\in \\langle 2 \\rangle$$ and $$\\{ 0 \\} \\neq \\langle 2 \\rangle$$, implying $$\\langle 0 \\rangle \\subsetneq \\langle 2 \\rangle$$. Therefore, $$\\langle 0 \\rangle$$ is not maximal, as there exists the proper ideal $$\\langle 2 \\rangle$$ that strictly contains it.
        `)
    ]),

    T.Prose.parse(`
        Recall the prime ideal $$\\langle 0 \\rangle$$ in the ring of integers, $$\\mathbb{Z}$$. For every other proper ideal $$\\langle n \\rangle$$, $$\\langle 0 \\rangle \\subset \\langle n \\rangle$$; thus, $$\\langle 0 \\rangle$$ is not maximal.
    `),

    T.Prose.parse(`
        Below, the second example will demonstrate how the prime ideal $$\\langle 2 \\rangle$$ in the ring of polynomials over integers $$\\mathbb{Z}[x]$$ is not maximal by showing $$\\langle 2 \\rangle \\subset \\langle 2, x \\rangle$$.
    `),

    T.List.numbered([
        T.Prose.parse(`
            Elements of $$\\langle 2, x\\rangle$$ are of the form $$2 f_1 + x  f_2$$, where $$f_1, f_2 \\in \\mathbb{Z}[x]$$.
        `),
        T.Prose.parse(`
            $$\\{ 2 f_1 + x f_2 \\} = \\langle 2, x \\rangle$$. If $$f_2 = 0$$, then $$\\{ 2 f_1 \\} \\subset \\langle 2, x \\rangle$$.
        `),
        T.Prose.parse(`
            Elements of $$\\langle 2 \\rangle$$ are of the form $$\\{ 2 f_1 \\}$$.
        `),
        T.Prose.parse(`
            If $$\\{ 2 f_1 \\} = \\langle 2 \\rangle$$ and $$\\{ 2 f_1 \\} \\subset \\langle 2, x \\rangle$$, then $$\\langle 2 \\rangle \\subset \\langle 2, x \\rangle$$. Therefore, $$\\langle 2 \\rangle$$ is not maximal.
        `),
    ]),
], 
    T.Prose.parse(`Prime $$\\;\\not\\!\\!\\!\\implies$$ Maximal`)
);