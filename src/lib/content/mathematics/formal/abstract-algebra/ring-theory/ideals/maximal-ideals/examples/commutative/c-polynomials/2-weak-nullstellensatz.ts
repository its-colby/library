import * as T from "$book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        We prove the weak form of Hilbert's Nullstellensatz: in the polynomial ring $$K[x_1,\\ldots,x_n]$$ over an algebraically closed field $$K$$, every maximal ideal has the form $$(x_1-a_1,\\ldots,x_n-a_n)$$ for some points $$(a_1,\\ldots,a_n) \\in K^n$$.
    `),

    T.List.numbered([
        T.Prose.parse(`
            Let $$\\mathcal{M}$$ be a maximal ideal in $$K[x_1,\\ldots,x_n]$$.
        `),
        T.Prose.parse(`
            Consider the quotient ring $$K[x_1,\\ldots,x_n]/\\mathcal{M}$$. Since $$\\mathcal{M}$$ is maximal, this quotient is a field, call it $$L$$.
        `),
        T.Prose.parse(`
            The natural map $$K \\to K[x_1,\\ldots,x_n] \\to L$$ is injective (as $$K$$ is a field) and makes $$L$$ a finitely generated algebra over $$K$$.
        `),
        T.Prose.parse(`
            By the primitive element theorem, $$L$$ is a finite extension of $$K$$. That is, $$L$$ is algebraic over $$K$$.
        `),
        T.Prose.parse(`
            Since $$K$$ is algebraically closed, we must have $$L = K$$. Therefore, each $$\\bar{x_i}$$ (the image of $$x_i$$ in $$L$$) must equal some $$a_i \\in K$$.
        `),
        T.Prose.parse(`
            This means $$x_i - a_i \\in \\mathcal{M}$$ for each $$i$$. Therefore, $$\\mathcal{M}$$ contains the ideal $$(x_1-a_1,\\ldots,x_n-a_n)$$.
        `),
        T.Prose.parse(`
            The ideal $$(x_1-a_1,\\ldots,x_n-a_n)$$ is maximal (its quotient is isomorphic to $$K$$). By maximality of $$\\mathcal{M}$$, we must have $$\\mathcal{M} = (x_1-a_1,\\ldots,x_n-a_n)$$.
        `),
    ]),

], T.Prose.parse(`Weak Nullstellensatz`));