import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        The following proof-by-contradiction proves that every maximal ideal is a prime ideal.
    `),

    new T.Digression([
        T.List.numbered([
            T.Prose.parse(`
                Recall the following definition of a prime ideal $$\\mathcal{P}$$ of a unital commutative ring $$\\mathcal{R}$$: For all $$x_1, x_2 \\in \\mathcal{R}$$, if $$x_1 x_2 \\in \\mathcal{P}$$ then either $$x_1 \\in \\mathcal{P}$$ or $$x_2 \\in \\mathcal{P}$$. Therefore, if an ideal $$I$$ is not a prime ideal, then there exists at least one such pair of elements $$x_1, x_2 \\in \\mathcal{R}$$ such that $$x_1 x_2 \\in \\mathcal{I}$$ but, both $$x_1 \\notin \\mathcal{I}$$ and $$x_2 \\notin \\mathcal{I}$$.
            `),
            T.Prose.parse(`
                Recall the following corollary from the definition of a maximal ideal $$\\mathcal{M}$$ for a unital commutative ring $$\\mathcal{R}$$. For any element $$r \\in \\mathcal{R}$$, if $$r \\notin \\mathcal{M}$$, then $$\\langle r, \\mathcal{M} \\rangle = \\langle 1 \\rangle$$.
            `),
            T.Prose.parse(`
                Recall the definition of an ideal as it pertains to $$\\langle 1 \\rangle$$ and an ideal $$\\mathcal{A} = \\langle a_1, \\ldots, a_n \\rangle$$ such that $$\\langle 1 \\rangle = \\mathcal{A}$$. There exists such elements from $$\\mathcal{R}$$, $$r_1, \\ldots, r_n \\in \\mathcal{R}$$, such that $$1 = r_1 a_1 + \\cdots + r_n a_n$$.
            `),

        ]),
    ], "Prerequisite Material"),

    T.List.numbered([
        T.Prose.parse(`
            Let $$\\mathcal{M}$$ be a maximal ideal in the unital commutative ring $$\\mathcal{R}$$. Assume $$\\mathcal{M}$$ is not prime.
        `),
        T.Prose.parse(`
            If $$\\mathcal{M}$$ is not prime, then there exists at least one such pair of elements $$x_1, x_2 \\in \\mathcal{R}$$ such that $$x = x_1 x_2$$ and $$x \\in \\mathcal{M}$$ but, both $$x_1 \\notin \\mathcal{M}$$ and $$x_2 \\notin \\mathcal{M}$$.
        `),
        T.Prose.parse(`
            If $$x_1, x_2 \\notin \\mathcal{M}$$, then $$\\langle x_1, \\mathcal{M} \\rangle = \\langle x_2, \\mathcal{M} \\rangle = \\langle 1 \\rangle$$. In other words, for some $$r_1, r_2 \\in \\mathcal{R}$$ and $$m_1, m_2 \\in \\mathcal{M}$$, $$1 = x_1 r_1 + m_1$$ and $$1 = x_2 r_2 + m_2$$.
        `),
        T.Prose.parse(`
            Multiplying the previous two equations yields $$1 = (x_1r_1 + m_1)(x_2r_2 + m_2)$$. This expands into $$xr_1r_2 + x_1r_1m_2 + x_2r_2m_1 + m_1m_2$$.
        `),
        T.Prose.parse(`
            In the above expression, each term contains either $$x$$, $$m_1$$, or $$m_2$$, each of which are in $$\\mathcal{M}$$. Since $$\\mathcal{M}$$ is additively closed, the entire expression is in $$\\mathcal{M}$$.
        `),
        T.Prose.parse(`
            If $$(x_1r_1 + m_1)(x_2r_2 + m_2)$$ is in $$\\mathcal{M}$$, then $$1$$ is in $$\\mathcal{M}$$.
        `),
        T.Prose.parse(`
            We have reached a contradiction. $$\\mathcal{M} = \\mathcal{R}$$, while assuming that $$\\mathcal{M}$$ is a maximal (therefore proper) ideal. Therefore, $$\\mathcal{M}$$ must also be prime.
        `),
    ]),

], T.Prose.parse(`Every Maximal Ideal is Prime`));