import * as T from "$book";

export const chapter_1 = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Let $$(a,0) \\in \\mathbb{Z} \\times \\{0\\}$$ and $$(0,b) \\in \\{0\\} \\times \\mathbb{Z}$$ be arbitrary elements.
        `),
        T.Prose.parse(`
            For any point $$(x,y) \\in \\mathbb{Z} \\times \\mathbb{Z}$$, we can express it as $$(x,y) = (x,0) + (0,y)$$.
        `),
        T.Prose.parse(`
            Clearly, $$(x,0) \\in \\mathbb{Z} \\times \\{0\\}$$ and $$(0,y) \\in \\{0\\} \\times \\mathbb{Z}$$.
        `),
        T.Prose.parse(`
            Moreover, this decomposition is unique since if $$(x,y) = (a,0) + (b,0)$$ with $$(a,0), (b,0) \\in \\mathbb{Z} \\times \\{0\\}$$, then $$x = a + b$$ and $$0 = 0 + 0$$, implying uniqueness.
        `),
        T.Prose.parse(`
            Note that $$\\mathbb{Z} \\times \\mathbb{Z}$$ is a free $$\\mathbb{Z}$$-module with basis $$\\{(1,0), (0,1)\\}$$.
        `),
        T.Prose.parse(`
            Therefore, $$\\mathbb{Z} \\times \\{0\\} \\oplus \\{0\\} \\times \\mathbb{Z} = \\mathbb{Z} \\times \\mathbb{Z}$$.
        `),
    ]),
], 
    T.Prose.parse(`Proving $$\\mathbb{Z} \\times \\{0\\} + \\{0\\} \\times \\mathbb{Z} = \\mathbb{Z} \\times \\mathbb{Z}$$`)
);

// ----- projective module (Z x {0} sum {0} x Z = Z x Z)
