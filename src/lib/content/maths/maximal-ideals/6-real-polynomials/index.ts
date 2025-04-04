import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([

    T.Prose.parse(`
        Recall the following ideals of the unital commutative ring $$\\mathbb{R}[x]$$.
    `),

    new T.List([
        T.Prose.parse(`
            $$\\langle \\ 2 \\ \\rangle = \\langle 1 \\rangle$$ This is because $$2 * \\frac{1}{2} = 1$$.
        `),
        T.Prose.parse(`
            $$\\langle \\ x^2+4x+4 \\ \\rangle \\subset \\langle (x+2) \\rangle$$ This is because $$x^2+4x+4 = (x+2)^2$$.
        `),
        T.Prose.parse(`
            $$\\langle \\ (x-4) \\ \\rangle$$ This is maximal.
        `),
    ]),
], T.Prose.parse(`$$\\mathbb{R}[x]$$`));

