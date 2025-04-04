import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        In a boolean ring, every prime ideal is also maximal. This is a special property that does not hold for rings in general, as we saw in previous sections.
    `),

    new T.Digression([
        T.List.numbered([
            T.Prose.parse(`
                Recall that a boolean ring is a ring where every element is idempotent, meaning $$x^2 = x$$ for all elements $$x$$ in the ring.
            `),
        ]),
    ], "Prerequisite Material"),

    T.List.numbered([
        T.Prose.parse(`
            Let $$\\mathcal{P}$$ be a prime ideal in a boolean ring $$\\mathcal{B}$$.
        `),
        T.Prose.parse(`
            Since $$\\mathcal{P} \\subset \\mathcal{B}$$, there must exist at least one element $$x \\in \\mathcal{B}$$ where $$x \\notin \\mathcal{P}$$.
        `),
        T.Prose.parse(`
            By the definition of an ideal, $$0 \\in \\mathcal{P}$$. In a boolean ring $$\\mathcal{B}$$, $$0 = x - x = x^2 - x = x(1-x)$$. Therefore, $$x(1-x) \\in \\mathcal{P}$$. 
        `),
        T.Prose.parse(`
            If $$x(1-x) \\in \\mathcal{P}$$, then $$x \\in \\mathcal{P}$$ or $$1-x \\in \\mathcal{P}$$, by the definition of a prime ideal. Let's assume that $$x \\in \\mathcal{P}$$.
        `),
        T.Prose.parse(`
            Assume a proper ideal $$\\mathcal{A}$$ exists, where $$\\mathcal{P} \\subset \\mathcal{A}$$.
        `),
        T.Prose.parse(`
            If $$\\mathcal{P} \\subset \\mathcal{A}$$, then $$x \\in \\mathcal{A}$$. Additionally, there exists at least one element in $$\\mathcal{A}$$ that is not in $$\\mathcal{P}$$, namely $$1-x \\in \\mathcal{A}$$.
        `),
        T.Prose.parse(`
            Since $$\\mathcal{A}$$ is additively closed, it must contain $$x + (1-x)$$, which simplifies to $$1$$.
        `),
        T.Prose.parse(`
            This is a contradiction. We have proved $$\\mathcal{A} = \\mathcal{B}$$, while assuming that $$\\mathcal{A}$$ is a proper ideal. Therefore, $$\\mathcal{P}$$ must be maximal.
        `),
    ]),

], T.Prose.parse(`Prime Ideals are Maximal in Boolean Rings`));

// Commutative rings in which prime ideals are maximal are known as zero-dimensional rings,