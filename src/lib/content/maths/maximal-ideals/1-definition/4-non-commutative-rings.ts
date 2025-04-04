import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        A maximal ideal $$\\mathcal{M}$$ of a unital commutative ring $$\\mathcal{R}$$ is a proper ideal, where there is no such other proper ideal $$\\mathcal{I}$$ such that $$\\mathcal{M} \\subsetneq \\mathcal{I} \\subsetneq \\mathcal{R}$$.
    `),

    

], T.Prose.parse(`Definition Within Non-Commutative Rings`));