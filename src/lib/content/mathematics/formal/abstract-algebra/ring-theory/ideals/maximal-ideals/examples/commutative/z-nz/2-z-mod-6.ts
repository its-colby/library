import * as T from "$book";

export const chapter = T.BookChapter.from_exposition([
    new T.List([
        T.Prose.parse(`
            $$\\langle 0 \\rangle = \\{ 0 \\}$$. Recall that an ideal must be an abelian group under addition. Thus, every ideal must contain $$0$$. Since $$\\mathbb{Z}/6\\mathbb{Z}$$ contains proper ideals in addition to $$\\langle 0 \\rangle$$, $$\\langle 0 \\rangle$$ is not maximal.
        `),
        T.Prose.parse(`
            $$\\langle 1 \\rangle = \\langle 5 \\rangle = \\{ 0, 1, 2, 3, 4, 5 \\}$$. $$\\langle 1 \\rangle$$ is a non-proper ideal (a unital ideal), and thus, is not maximal.
        `),
        T.Prose.parse(`
            $$\\langle 2 \\rangle = \\langle 4 \\rangle = \\{ 0, 2, 4 \\}$$. $$\\langle 2 \\rangle$$ is maximal, as it is not contained in any other ideal.
        `),
        T.Prose.parse(`
            $$\\langle 3 \\rangle = \\langle 3 \\rangle = \\{ 0, 3 \\}$$. $$\\langle 3 \\rangle$$ is maximal, as it is not contained in any other ideal.
        `),
    ]),

], T.Prose.parse(`The Maximal Ideals of $$\\mathbb{Z}/6\\mathbb{Z}$$`));
    