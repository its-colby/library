import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        The following proof demonstrates Burnside's Lemma, which states that for a finite group $$G$$ acting on a finite set $$X$$, the number of orbits is equal to the average number of fixed points of the elements of $$G$$.
    `),

    new T.Digression([
        T.List.numbered([
            T.Prose.parse(`
                Recall that for a group $$G$$ acting on a set $$X$$, the fixed points of an element $$g \\in G$$ are the elements $$x \\in X$$ such that $$gx = x$$.
            `),
            T.Prose.parse(`
                Recall that the number of fixed points of $$g$$ is denoted $$\\text{Fix}(g)$$.
            `),
            T.Prose.parse(`
                Recall that two elements $$x, y \\in X$$ are in the same orbit if there exists $$g \\in G$$ such that $$gx = y$$.
            `),
        ]),
    ], "Prerequisite Material"),

    T.List.numbered([
        T.Prose.parse(`
            Let $$G$$ be a finite group acting on a finite set $$X$$. Let $$\\mathcal{O}$$ be the set of orbits of this action.
        `),
        T.Prose.parse(`
            Consider the set $$S = \\{(g, x) \\in G \\times X \\mid gx = x\\}$$. We can count the size of $$S$$ in two ways.
        `),
        T.Prose.parse(`
            First, for each $$g \\in G$$, there are $$\\text{Fix}(g)$$ elements $$x \\in X$$ such that $$(g, x) \\in S$$. Therefore, $$|S| = \\sum_{g \\in G} \\text{Fix}(g)$$.
        `),
        T.Prose.parse(`
            Second, for each $$x \\in X$$, there are $$|G_x|$$ elements $$g \\in G$$ such that $$(g, x) \\in S$$, where $$G_x$$ is the stabilizer of $$x$$.
        `),
        T.Prose.parse(`
            By the Orbit-Stabilizer Theorem, $$|G_x| = |G|/|Gx|$$, where $$Gx$$ is the orbit of $$x$$.
        `),
        T.Prose.parse(`
            Therefore, $$|S| = \\sum_{x \\in X} |G_x| = \\sum_{x \\in X} \\frac{|G|}{|Gx|} = |G| \\sum_{x \\in X} \\frac{1}{|Gx|}$$.
        `),
        T.Prose.parse(`
            Since elements in the same orbit have the same orbit size, we can group the sum by orbits: $$|S| = |G| \\sum_{O \\in \\mathcal{O}} \\sum_{x \\in O} \\frac{1}{|O|} = |G| \\sum_{O \\in \\mathcal{O}} 1 = |G| \\cdot |\\mathcal{O}|$$.
        `),
        T.Prose.parse(`
            Equating the two expressions for $$|S|$$, we get $$\\sum_{g \\in G} \\text{Fix}(g) = |G| \\cdot |\\mathcal{O}|$$.
        `),
        T.Prose.parse(`
            Dividing both sides by $$|G|$$ gives $$|\\mathcal{O}| = \\frac{1}{|G|} \\sum_{g \\in G} \\text{Fix}(g)$$, which is Burnside's Lemma.
        `),
    ]),

], T.Prose.parse(`Burnside's Lemma`)); 