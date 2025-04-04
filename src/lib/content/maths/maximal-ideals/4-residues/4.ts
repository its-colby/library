import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([

    T.Prose.parse(`
        Here we present a concrete example of how quotienting a non-commutative ring by a maximal two-sided ideal yields a simple ring. Consider the ring of quaternions $$\\mathbb{H}$$, which consists of elements of the form $$a + bi + cj + dk$$ where $$a, b, c, d$$ are real numbers and $$i^2 = j^2 = k^2 = ijk = -1$$. This is a non-commutative ring because $$ij = -ji$$, $$jk = -kj$$, and $$ki = -ik$$.
    `),

    T.List.numbered([
        T.Prose.parse(`
            Consider the two-sided ideal $$\\mathcal{M} = (1 + i)$$ in $$\\mathbb{H}$$. This is the set of all quaternions of the form $$(1 + i)q$$ where $$q$$ ranges over $$\\mathbb{H}$$.
        `),
        T.Prose.parse(`
            The ideal $$\\mathcal{M}$$ is maximal among two-sided ideals in $$\\mathbb{H}$$. The quotient $$\\mathbb{H}/\\mathcal{M}$$ is isomorphic to $$\\mathbb{C}$$ as a ring.
        `),
        T.Prose.parse(`
            This provides an interesting example where:
            - We start with $$\\mathbb{H}$$, which is non-commutative but has inverses for all non-zero elements
            - The quotient $$\\mathbb{H}/\\mathcal{M}$$ is simple (has no proper non-zero two-sided ideals)
            - The quotient is actually commutative, despite starting with a non-commutative ring
            - The quotient inherits the unit but not the division ring property of $$\\mathbb{H}$$
        `),
    ]),

], T.Prose.parse(`Example: Quaternions mod $$(1 + i)$$`));