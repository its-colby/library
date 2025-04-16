import * as T from "$book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        The following proof demonstrates Lagrange's Theorem, which states that for any finite group $$G$$ and any subgroup $$H$$ of $$G$$, the order of $$H$$ divides the order of $$G$$.
    `),

    new T.Digression([
        T.List.numbered([
            T.Prose.parse(`
                Recall that for a group $$G$$ and a subgroup $$H$$, the left cosets of $$H$$ in $$G$$ are the sets $$gH = \\{gh \\mid h \\in H\\}$$ for each $$g \\in G$$.
            `),
            T.Prose.parse(`
                Recall that any two left cosets of $$H$$ in $$G$$ are either identical or disjoint, and every element of $$G$$ belongs to exactly one left coset of $$H$$.
            `),
            T.Prose.parse(`
                Recall that for any $$g \\in G$$, the mapping $$h \\mapsto gh$$ is a bijection from $$H$$ to $$gH$$, so all left cosets have the same cardinality as $$H$$.
            `),
        ]),
    ], "Prerequisite Material"),

    T.List.numbered([
        T.Prose.parse(`
            Let $$G$$ be a finite group and $$H$$ a subgroup of $$G$$. Let $$|G|$$ denote the order of $$G$$ and $$|H|$$ denote the order of $$H$$.
        `),
        T.Prose.parse(`
            The left cosets of $$H$$ in $$G$$ partition $$G$$ into disjoint subsets. Let $$k$$ be the number of distinct left cosets of $$H$$ in $$G$$.
        `),
        T.Prose.parse(`
            Since each left coset has exactly $$|H|$$ elements and the cosets are disjoint, the total number of elements in $$G$$ is $$k \\cdot |H|$$.
        `),
        T.Prose.parse(`
            Therefore, $$|G| = k \\cdot |H|$$, which shows that $$|H|$$ divides $$|G|$$.
        `),
        T.Prose.parse(`
            The number $$k$$ of distinct left cosets is called the index of $$H$$ in $$G$$, denoted $$[G:H]$$. Thus, we have $$|G| = [G:H] \\cdot |H|$$.
        `),
    ]),

], T.Prose.parse(`Lagrange's Theorem`)); 