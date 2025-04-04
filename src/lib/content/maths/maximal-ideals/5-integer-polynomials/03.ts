import * as T from "$lib/book";

export const chapter_3 = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Elements of $$\\langle \\ 2, \\ x + 1 \\ \\rangle$$ are of the form $$2 \\cdot f + (x + 1) \\cdot g$$, where $$f, g \\in \\mathbb{Z}[x]$$.
        `),
        T.Prose.parse(`
            Let both $$f$$ and $$g$$ be particular functions, $$f_k$$ and $$g_k$$. Let $$f_k = x^2q + p$$, where $$p,q \\in \\mathbb{Z}[x]$$. Let $$g_k =q$$. In other words, $$2 \\cdot f_k + (x + 1) \\cdot g_k$$ simplifies to $$2x^2q + 2p + (x + 1)q$$. This means that $$\\{ 2p + (2x^2 + x + 1)q\\} \\subset \\langle 2, x + 1 \\rangle$$.
        `),
        T.Prose.parse(`
            $$\\{ 2p + (2x^2 + x + 1)q\\} = \\langle 2, 2x^2 + x + 1 \\rangle$$, which means $$\\langle 2, 2x^2 + x + 1 \\rangle \\subset \\langle 2, x + 1 \\rangle$$.
        `),
        T.Prose.parse(`
            Therefore, $$\\langle 2, 2x^2 + x + 1 \\rangle$$ is not maximal.
        `),
    ]),
], 
    T.Prose.parse(`Proving $$\\langle \\ 2, \\ 2x^2 + x + 1 \\ \\rangle \\subset \\langle \\ 2, \\ x + 1 \\ \\rangle$$`)
);
