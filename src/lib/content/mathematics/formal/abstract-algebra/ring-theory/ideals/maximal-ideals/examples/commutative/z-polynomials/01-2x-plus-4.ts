import * as T from "$book";

export const chapter_1 = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Elements of $$\\langle 2 \\rangle$$ are of the form $$2 \\cdot f$$, where $$f \\in \\mathbb{Z}[x]$$.
        `),
        T.Prose.parse(`
            Let $$f$$ be a particular function $$f_k$$, where $$f_k = g \\cdot (x+2)$$ and $$g \\in \\mathbb{Z}[x]$$. Note, $$f$$ is unrestricted and $$\\{2 \\cdot f \\} = \\langle 2 \\rangle$$; alternatively, $$f_k$$ is restricted to only be multiples of $$(x+2)$$, thus $$\\{ 2 \\cdot f_k \\} \\subset \\langle 2 \\rangle$$.
        `),
        T.Prose.parse(`
            Elements of $$\\langle 2x + 4 \\rangle$$ are of the form $$(2x + 4) \\cdot g$$, where $$g$$ was defined above as any possible polynomial of $$\\mathbb{Z}[x]$$.
        `),
        T.Prose.parse(`
            $$\\{ (2x + 4) \\cdot g \\} = \\{ 2 \\cdot g(x + 2) \\} = \\{2 \\cdot f_k \\}$$. This means $$\\langle 2x + 4 \\rangle = \\{2 \\cdot f_k \\}$$, which means $$\\langle 2x + 4 \\rangle \\subset \\langle 2 \\rangle$$.
        `),
        T.Prose.parse(`
            Therefore, $$\\langle 2x + 4 \\rangle$$ is not maximal.
        `),
    ]),
], 
    T.Prose.parse(`Non-Example: $$\\langle 2x + 4 \\rangle$$`)
);