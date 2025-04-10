import * as T from "$lib/book";

export const chapter_5 = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Elements of $$\\langle \\ 2, \\ x + 1 \\ , x^2 \\ \\rangle$$ are of the form $$2f + (x + 1)g + x^2h$$, where $$f, g, h \\in \\mathbb{Z}[x]$$.
        `),
        T.Prose.parse(`
            Let both $$f$$, $$g$$, $$h$$ be particular functions, $$f_k$$, $$g_k$$, $$h_k$$. Let $$f_k = -xp$$, $$g_k = (x+1)p$$, and $$h_k = -p$$, where $$p \\in \\mathbb{Z}[x]$$. In other words, $$2f_k + (x + 1)g_k + x^2h_k$$ simplifies to $$-2xp + (x^2 + 2x + 1)p - x^2p = 1p$$.
        `),
        T.Prose.parse(`
            $$\\{ 1p \\} = \\langle 1 \\rangle$$, which means $$\\langle 2, x + 1, x \\ \\rangle = \\langle 1 \\rangle$$.
        `),
        T.Prose.parse(`
            Therefore, $$\\langle 2, x + 1, x \\ \\rangle$$ is not maximal, as it is a unital ideal.
        `),
    ])
],
    T.Prose.parse(`Non-Example: $$\\langle \\ 2, \\ x + 1, \\ x^2 \\ \\rangle$$`)
);