import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        A maximal ideal $$\\mathcal{M}$$ of a unital commutative ring $$\\mathcal{R}$$ is a proper ideal, where there is no such other proper ideal $$\\mathcal{I}$$ such that $$\\mathcal{M} \\subsetneq \\mathcal{I} \\subsetneq \\mathcal{R}$$.
    `),

    T.Prose.parse(`
        For example, in the ring of integers $$\\mathbb{Z}$$, $$\\langle 4 \\rangle \\subsetneq \\langle 2 \\rangle$$. Similarly, $$\\langle 0 \\rangle \\subsetneq \\langle 2 \\rangle$$. Therefore, $$\\langle 0 \\rangle$$ and $$\\langle 4 \\rangle$$ are not maximal ideals. However, there is no such proper ideal $$\\mathcal{I}$$ such that $$\\langle 2 \\rangle \\subsetneq \\mathcal{I}$$. Therefore, $$\\langle 2 \\rangle$$ is a maximal ideal.
    `),

    new T.Digression([
        T.Prose.parse(`
            Recall that a poset (partially ordered set) is a set equipped with a homogenous relation (binary relation from X to itself) that satisfies the properties of reflexivity, antisymmetry, and transitivity. The most common relation used in this context is the subset relation.
        `),

        T.Prose.parse(`
            The set of proper ideals is a partially ordered set under the subset relation. Proper ideals may be disjoint; therefore, they form a poset as opposed to a totally ordered set.
        `),

    ], "Prerequisite Matieral — The Poset of Proper Ideals"),

    T.Prose.parse(`
        Equivalently, a maximal ideal can be defined as a maximal element within the poset of proper ideals of $$\\mathcal{R}$$.
    `),

], T.Prose.parse(`Definition Within Commutative Rings`));