import * as T from "$book";

export const chapter = T.Exposition.from([
    T.Prose.parse(`
        The following proof demonstrates the Orbit-Stabilizer Theorem, which states that for a group $$G$$ acting on a set $$X$$ and any element $$x \\in X$$, the order of the group $$G$$ is equal to the product of the size of the orbit of $$x$$ and the size of the stabilizer of $$x$$.
    `),

    new T.Digression([
        T.List.numbered([
            T.Prose.parse(`
                Recall that for a group $$G$$ acting on a set $$X$$, the orbit of an element $$x \\in X$$ is the set $$Gx = \\{gx \\mid g \\in G\\}$$.
            `),
            T.Prose.parse(`
                Recall that the stabilizer of $$x$$ is the subgroup $$G_x = \\{g \\in G \\mid gx = x\\}$$.
            `),
            T.Prose.parse(`
                Recall that the left cosets of $$G_x$$ in $$G$$ are in bijection with the elements of the orbit $$Gx$$ via the map $$gG_x \\mapsto gx$$.
            `),
        ]),
    ], "Prerequisite Material"),

    T.List.numbered([
        T.Prose.parse(`
            Let $$G$$ be a finite group acting on a set $$X$$, and let $$x \\in X$$. Let $$Gx$$ be the orbit of $$x$$ and $$G_x$$ be the stabilizer of $$x$$.
        `),
        T.Prose.parse(`
            Consider the map $$\\phi: G/G_x \\to Gx$$ defined by $$\\phi(gG_x) = gx$$, where $$G/G_x$$ denotes the set of left cosets of $$G_x$$ in $$G$$.
        `),
        T.Prose.parse(`
            The map $$\\phi$$ is well-defined: if $$gG_x = hG_x$$, then $$h^{-1}g \\in G_x$$, so $$h^{-1}gx = x$$, which implies $$gx = hx$$.
        `),
        T.Prose.parse(`
            The map $$\\phi$$ is injective: if $$gx = hx$$, then $$h^{-1}gx = x$$, so $$h^{-1}g \\in G_x$$, which implies $$gG_x = hG_x$$.
        `),
        T.Prose.parse(`
            The map $$\\phi$$ is surjective: for any $$y \\in Gx$$, there exists $$g \\in G$$ such that $$y = gx$$, so $$y = \\phi(gG_x)$$.
        `),
        T.Prose.parse(`
            Since $$\\phi$$ is a bijection, $$|G/G_x| = |Gx|$$. By Lagrange's Theorem, $$|G| = |G_x| \\cdot |G/G_x|$$.
        `),
        T.Prose.parse(`
            Therefore, $$|G| = |G_x| \\cdot |Gx|$$, which is the Orbit-Stabilizer Theorem.
        `),
    ]),

], T.Prose.parse(`Orbit-Stabilizer Theorem`)); 