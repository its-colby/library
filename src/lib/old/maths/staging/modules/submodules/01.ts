import * as T from "$lib/book";

export const chapter_1 = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Let $$G$$ be an abelian group. We can view $$G$$ as a $$\\mathbb{Z}$$-module where scalar multiplication is defined by:
            $$n \\cdot g = \\underbrace{g + g + \\cdots + g}_{n \\text{ times}}$$ for $$n > 0$$
            $$0 \\cdot g = 0$$
            $$(-n) \\cdot g = -(n \\cdot g)$$ for $$n > 0$$
        `),
        T.Prose.parse(`
            Let $$H$$ be a subgroup of $$G$$. We will show $$H$$ is a $$\\mathbb{Z}$$-submodule.
        `),
        T.Prose.parse(`
            First, $$H$$ is closed under addition since it's a subgroup.
        `),
        T.Prose.parse(`
            For scalar multiplication, let $$h \\in H$$ and $$n \\in \\mathbb{Z}$$:
            - If $$n > 0$$: $$n \\cdot h$$ is a sum of $$h$$ with itself $$n$$ times, which stays in $$H$$ by closure
            - If $$n = 0$$: $$0 \\cdot h = 0 \\in H$$ since $$H$$ contains the identity
            - If $$n < 0$$: $$n \\cdot h = -((-n) \\cdot h)$$ stays in $$H$$ since $$H$$ is closed under negation
        `),
        T.Prose.parse(`
            Conversely, any $$\\mathbb{Z}$$-submodule of $$G$$ must be closed under addition and negation (since $$-g = (-1) \\cdot g$$), making it a subgroup.
        `),
        T.Prose.parse(`
            Therefore, the subgroups of $$G$$ exactly coincide with the $$\\mathbb{Z}$$-submodules of $$G$$.
        `),
    ]),
], 
    T.Prose.parse(`subgroups as $$\\mathbb{Z}$$-submodules`)
);