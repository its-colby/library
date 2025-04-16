import * as T from "$book";

export const chapter = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Consider the two-sided maximal ideal $$\\mathcal{M} = (1 + i)$$ in the non-commutative division ring $$\\mathbb{H}$$. The quotient $$\\mathbb{H}/\\mathcal{M}$$ is a field.
        `),
        T.Prose.parse(`
            Consider the left maximal ideal $$\\mathcal{M} = \\langle x \\rangle$$ in the Weyl algebra $$\\mathbb{A_1}$$. The quotient $$\\mathbb{A_1}/\\mathcal{M}$$ is a left simple module.
        `),
    ]),

], T.Prose.parse(`Non-Trivial Examples`));