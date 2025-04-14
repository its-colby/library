import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        The following proof demonstrates that for any group $$G$$ and normal subgroup $$N$$, the set of cosets $$G/N$$ forms a group under the operation $$(gN)(hN) = (gh)N$$.
    `),

    new T.Digression([
        T.List.numbered([
            T.Prose.parse(`
                Recall that a subgroup $$N$$ of $$G$$ is normal if $$gN = Ng$$ for all $$g \\in G$$.
            `),
            T.Prose.parse(`
                Recall that the left coset of $$N$$ containing $$g$$ is $$gN = \\{gn \\mid n \\in N\\}$$.
            `),
            T.Prose.parse(`
                Recall that for a normal subgroup $$N$$, the left and right cosets coincide, so we can simply refer to them as cosets.
            `),
        ]),
    ], "Prerequisite Material"),

    T.List.numbered([
        T.Prose.parse(`
            Let $$G$$ be a group and $$N$$ a normal subgroup of $$G$$. Let $$G/N$$ denote the set of all cosets of $$N$$ in $$G$$.
        `),
        T.Prose.parse(`
            Define a binary operation on $$G/N$$ by $$(gN)(hN) = (gh)N$$. We must show this operation is well-defined.
        `),
        T.Prose.parse(`
            Suppose $$gN = g'N$$ and $$hN = h'N$$. Then $$g' = gn_1$$ and $$h' = hn_2$$ for some $$n_1, n_2 \\in N$$.
        `),
        T.Prose.parse(`
            Then $$g'h' = gn_1hn_2 = ghn_1'n_2$$ for some $$n_1' \\in N$$ (since $$N$$ is normal), which shows $$(g'h')N = (gh)N$$.
        `),
        T.Prose.parse(`
            The operation is associative: $$(gN)((hN)(kN)) = (gN)((hk)N) = (g(hk))N = ((gh)k)N = (ghN)(kN) = ((gN)(hN))(kN)$$.
        `),
        T.Prose.parse(`
            The identity element is $$N$$ itself: $$(gN)(N) = (gN)(eN) = (ge)N = gN$$ and $$(N)(gN) = (eN)(gN) = (eg)N = gN$$.
        `),
        T.Prose.parse(`
            The inverse of $$gN$$ is $$g^{-1}N$$: $$(gN)(g^{-1}N) = (gg^{-1})N = eN = N$$ and $$(g^{-1}N)(gN) = (g^{-1}g)N = eN = N$$.
        `),
        T.Prose.parse(`
            Therefore, $$G/N$$ forms a group under the defined operation, called the quotient group of $$G$$ by $$N$$.
        `),
    ]),

], T.Prose.parse(`Quotient Group Theorem`)); 