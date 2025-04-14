import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        The following proof demonstrates the Class Equation, which states that for a finite group $$G$$, the order of $$G$$ is equal to the sum of the sizes of its conjugacy classes. Furthermore, when $$G$$ is a $$p$$-group, the equation reveals important information about the center of $$G$$.
    `),

    new T.Digression([
        T.List.numbered([
            T.Prose.parse(`
                Recall that for a group $$G$$, the conjugacy class of an element $$g \\in G$$ is the set $$\\{hgh^{-1} \\mid h \\in G\\}$$.
            `),
            T.Prose.parse(`
                Recall that the centralizer of an element $$g \\in G$$ is the subgroup $$C_G(g) = \\{h \\in G \\mid hg = gh\\}$$.
            `),
            T.Prose.parse(`
                Recall that the center of $$G$$, denoted $$Z(G)$$, is the set of elements that commute with all elements of $$G$$.
            `),
            T.Prose.parse(`
                Recall that for any $$g \\in G$$, the size of the conjugacy class of $$g$$ is equal to the index of its centralizer: $$|\\text{Cl}(g)| = [G : C_G(g)]$$.
            `),
        ]),
    ], "Prerequisite Material"),

    T.List.numbered([
        T.Prose.parse(`
            Let $$G$$ be a finite group, and let $$\\mathcal{C}$$ be the set of conjugacy classes of $$G$$.
        `),
        T.Prose.parse(`
            Since conjugacy classes partition $$G$$, we can write $$|G| = \\sum_{C \\in \\mathcal{C}} |C|$$.
        `),
        T.Prose.parse(`
            For any $$g \\in G$$, the size of its conjugacy class $$\\text{Cl}(g)$$ is equal to $$[G : C_G(g)]$$ by the Orbit-Stabilizer Theorem, where $$G$$ acts on itself by conjugation.
        `),
        T.Prose.parse(`
            Therefore, we can rewrite the equation as $$|G| = \\sum_{g \\in \\mathcal{R}} [G : C_G(g)]$$, where $$\\mathcal{R}$$ is a set of representatives of the conjugacy classes.
        `),
        T.Prose.parse(`
            Note that elements in the center $$Z(G)$$ have conjugacy classes of size 1, since they commute with all elements of $$G$$.
        `),
        T.Prose.parse(`
            Let $$\\mathcal{R}'$$ be a set of representatives of the non-central conjugacy classes. Then we can write:
            $$|G| = |Z(G)| + \\sum_{g \\in \\mathcal{R}'} [G : C_G(g)]$$
        `),
        T.Prose.parse(`
            This is the Class Equation. When $$G$$ is a $$p$$-group, each $$[G : C_G(g)]$$ is a power of $$p$$ greater than 1, which implies that $$|Z(G)|$$ is divisible by $$p$$.
        `),
    ]),

], T.Prose.parse(`Class Equation`)); 