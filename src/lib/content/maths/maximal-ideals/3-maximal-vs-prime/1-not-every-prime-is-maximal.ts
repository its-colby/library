import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        We prove that not all prime ideals are maximal, by showing that at least one prime ideal is not maximal.
    `),

    T.Prose.parse(`
        The first example is a trivial example. Consider the prime ideal $$\\langle 0 \\rangle = \\{ 0 \\}$$ in the ring of integers, $$\\mathbb{Z}$$. For every other proper ideal $$\\langle n \\rangle$$, $$\\langle 0 \\rangle \\subset \\langle n \\rangle$$; thus, $$\\langle 0 \\rangle$$ is not maximal.
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
    T.Prose.parse(`Not Every Prime Ideal is Maximal`)
);