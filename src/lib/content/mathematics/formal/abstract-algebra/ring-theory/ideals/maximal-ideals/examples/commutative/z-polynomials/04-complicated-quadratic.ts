import * as T from "$book";

export const chapter_4 = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Elements of $$\\langle \\ 2, \\ x + 1 \\ \\rangle$$ are of the form $$2 \\cdot f + (x + 1) \\cdot g$$, where $$f, g \\in \\mathbb{Z}[x]$$.
        `),
        T.Prose.parse(`
            Let both $$f$$ and $$g$$ be particular functions, $$f_k$$ and $$g_k$$. Let $$f_k = 2x^2q + xq + 1p$$, where $$p,q \\in \\mathbb{Z}[x]$$. Let $$g_k = 3q$$. In other words, $$2 \\cdot f_k + (x + 1) \\cdot g_k$$ simplifies to $$4x^2q + 2xq + 2p + 3q(x + 1)$$. This means that $$\\{ 2p + (4x^2 + 5x + 3)q\\} \\subset \\langle 2, x + 1 \\rangle$$.
        `),
        T.Prose.parse(`
            $$\\{ 2p + (4x^2 + 5x + 1)q\\} = \\langle 2, 4x^2 + 5x + 1 \\rangle$$, which means $$\\langle 2, 4x^2 + 5x + 1 \\rangle \\subset \\langle 2, x + 1 \\rangle$$.
        `),
        T.Prose.parse(`
            Therefore, $$\\langle 2, 4x^2 + 5x + 1 \\rangle$$ is not maximal.
        `),
    ]),
], 
    T.Prose.parse(`Non-Example: $$\\langle \\ 2, \\ 4x^2 + 5x + 3 \\ \\rangle$$`)
);
