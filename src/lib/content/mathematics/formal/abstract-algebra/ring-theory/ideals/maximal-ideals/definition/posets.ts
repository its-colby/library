import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        Recall the definition of a partially ordered set (poset). A poset is a set of mathematical objects equipped with a homogenous binary relation that is reflexive, antisymmetric, and transitive.
    `),

    T.Prose.parse(`
        Moreover, recall that the subseteq relation $$ \\subseteq $$ forms a partial order on any collection of sets. Thus, for any ring $$\\mathcal{R}$$, the set of all proper ideals $$ \\mathcal{P} $$ is a collection of sets, it forms a poset under the subseteq relation. Note, if the ring was non-commutative, then it would the partially ordered set of all a) two-sided proper ideals, b) left proper ideals, or c) right proper ideals, as opposed to just "proper ideals".
    `),
    T.Prose.parse(`
        For example, recall the unital commutative ring $$\\mathbb{Z}$$. The partially ordered set $$\\mathcal{P}$$ would look like $$\\langle 0 \\rangle \\subseteq \\langle \\pm n \\rangle, \\langle \\pm 2 \\rangle \\subseteq \\langle \\pm 2k \\rangle, \\langle \\pm 3 \\rangle \\subseteq \\langle \\pm 3k \\rangle, \\ldots$$ for $$n \\neq 1 \\land n \\in \\mathbb{N}$$ and $$k \\neq 0,1 \\land k \\in \\mathbb{N}$$. Note, not every proper ideal can be compared with $$\\subseteq$$. For instance, $$\\langle 2 \\rangle$$ and $$\\langle 3 \\rangle$$ are incomparable under $$\\subseteq$$. This is why its called a "partially" ordered set.
    `),

], T.Prose.parse(`Proper Ideals as a Poset`));
