import * as T from "$book";

export const chapter = T.Exposition.from([

    T.Prose.parse(`
        Maximal ideals admit multiple equivalent definitions. We present two characterizations.
    `),

    T.Prose.parse(`
        In any ring $$\\mathcal{R}$$, maximal ideals emerge as the greatest elements in chains of proper ideals. The poset of proper ideals determines the maximal ideals: an empty poset lacks maximal ideals, a single chain yields one maximal ideal, and infinite chains produce infinitely many maximal ideals.
    `),

    T.Prose.parse(`
        In a unital commutative ring $$\\mathcal{R}$$, a maximal ideal $$\\mathcal{M}$$ is a proper ideal that fails to admit any larger proper ideal between itself and $$\\mathcal{R}$$.
    `),

], T.Prose.parse(`Definition`));