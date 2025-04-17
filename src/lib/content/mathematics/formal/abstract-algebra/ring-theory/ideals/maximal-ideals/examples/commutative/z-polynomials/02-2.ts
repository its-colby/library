import * as T from "$book";

export const chapter_2 = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Elements of $$\\langle \\ 2, \\ 2x^2 + x + 1 \\ \\rangle$$ are of the form $$2 \\cdot f + (2x^2 + x + 1) \\cdot g$$, where $$f, g \\in \\mathbb{Z}[x]$$.
        `),
        T.Prose.parse(`
            Let both $$f$$ and $$g$$ be particular functions, $$f_k$$ and $$g_k$$, where $$f_k$$ is a polynomial $$p \\in \\mathbb{Z}[x]$$ and $$g_k$$ is the constant polynomial $$0$$. In other words, $$2 \\cdot f_k + (2x^2 + x + 1) \\cdot g_k$$ simplifies to $$2 \\cdot p$$. This means that $$\\{ 2 \\cdot p \\} \\subset \\langle 2, 2x^2 + x + 1 \\rangle$$.
        `),
        T.Prose.parse(`
            $$\\{ 2 \\cdot p \\} = \\langle 2 \\rangle$$, which means $$\\langle 2 \\rangle \\subset \\langle 2, 2x^2 + x + 1 \\rangle$$.
        `),
        T.Prose.parse(`
            Therefore, $$\\langle 2 \\rangle$$ is not maximal.
        `),
    ]),
], 
    T.Prose.parse(`Non-Example: $$\\langle 2 \\rangle$$`)
);