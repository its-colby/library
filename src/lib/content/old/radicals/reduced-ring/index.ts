import * as T from "$book";

export const reduced_ring = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            The ring $$\\mathbb{Z}$$ is reduced. To prove this, suppose $$a^n = 0$$ for some $$a \\in \\mathbb{Z}$$ and $$n > 0$$. Since $$\\mathbb{Z}$$ is an integral domain, if $$a^n = 0$$, then $$a = 0$$. Therefore, $$\\mathbb{Z}$$ has no nonzero nilpotent elements.
        `),
        T.Prose.parse(`
            The polynomial ring $$\\mathbb{Z}[x]$$ is reduced. Suppose $$f(x)^n = 0$$ for some polynomial $$f(x)$$ and $$n > 0$$. Since $$\\mathbb{Z}[x]$$ is an integral domain, $$f(x)^n = 0$$ implies $$f(x) = 0$$. Thus $$\\mathbb{Z}[x]$$ has no nonzero nilpotent elements.
        `),
        T.Prose.parse(`
            The ring $$\\mathbb{Z}/6\\mathbb{Z}$$ is not reduced. Consider the element $$[2]_6 + [3]_6 = [5]_6$$. We have $$[5]_6^2 = [25]_6 = [1]_6$$ and $$[2]_6 \\cdot [3]_6 = [0]_6$$. However, the subring $$\\mathbb{Z}/15\\mathbb{Z}$$ is reduced because 15 is square-free, so no element squares to zero.
        `),
        T.Prose.parse(`
            The product ring $$\\mathbb{R} \\times \\mathbb{R}$$ is reduced. If $$(a,b)^n = (0,0)$$, then $$a^n = 0$$ and $$b^n = 0$$. Since $$\\mathbb{R}$$ is a field, this implies $$a = b = 0$$. Therefore $$(a,b) = (0,0)$$ is the only nilpotent element.
        `),
        T.Prose.parse(`
            The ring $$\\mathbb{Z}[x]/(x^2)$$ is not reduced. The element $$[x]$$ is nilpotent since $$[x]^2 = [0]$$. In contrast, $$\\mathbb{Z}[x]/(x^2-1)$$ is reduced because it's isomorphic to $$\\mathbb{Z} \\times \\mathbb{Z}$$ via $$f(x) \\mapsto (f(1), f(-1))$$.
        `),
    ]),
    new T.List([
        T.Prose.parse(`
            Key properties of reduced rings:
        `),
        T.Prose.parse(`
            1. All integral domains are reduced
        `),
        T.Prose.parse(`
            2. Any product of reduced rings is reduced
        `),
        T.Prose.parse(`
            3. For $$\\mathbb{Z}/n\\mathbb{Z}$$, the ring is reduced if and only if n is square-free
        `),
        T.Prose.parse(`
            4. A ring is reduced if and only if its nilradical is zero
        `),
    ]),
],
    T.Prose.parse(`Examples of Reduced and Non-reduced Rings`)
);