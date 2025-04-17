import * as T from "$book";

export const jacobson_radical = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            In any field $$F$$, the Jacobson radical $$J(F) = \\{0\\}$$. This is because in a field, every non-zero element is a unit, so the only element that can be in every maximal ideal is 0. For example, in $$\\mathbb{Q}$$, $$J(\\mathbb{Q}) = \\{0\\}$$.
        `),
        T.Prose.parse(`
            In $$\\mathbb{Z}$$, the Jacobson radical is $$J(\\mathbb{Z}) = \\{0\\}$$. This is because $$\\langle p \\rangle$$ is a maximal ideal for each prime $$p$$, and $$\\bigcap_{p \\text{ prime}} \\langle p \\rangle = \\{0\\}$$. Any non-zero integer is not in at least one maximal ideal.
        `),
        T.Prose.parse(`
            In $$\\mathbb{Z}/4\\mathbb{Z}$$, the Jacobson radical is $$J(\\mathbb{Z}/4\\mathbb{Z}) = \\{[0]_4, [2]_4\\}$$. This is because $$\\langle [2]_4 \\rangle$$ is the unique maximal ideal. We can verify that $$1 + [2]_4 = [3]_4$$ is a unit, as required for elements of the Jacobson radical.
        `),
        T.Prose.parse(`
            In $$\\mathbb{Z}[x]$$, the Jacobson radical is $$J(\\mathbb{Z}[x]) = \\{0\\}$$. For any non-zero polynomial $$f(x)$$, there exists a maximal ideal $$\\langle p, x - a \\rangle$$ (where $$p$$ is prime and $$a$$ is chosen to avoid $$f(a)$$ being divisible by $$p$$) that doesn't contain $$f(x)$$.
        `),
        T.Prose.parse(`
            In the ring of upper triangular 2×2 matrices over $$\\mathbb{R}$$, the Jacobson radical consists of matrices of the form $$\\begin{pmatrix} 0 & a \\\\ 0 & 0 \\end{pmatrix}$$. These are precisely the elements $$n$$ where $$1 + rn$$ is invertible for all elements $$r$$ in the ring.
        `),
    ]),
    new T.List([
        T.Prose.parse(`
            Key properties of the Jacobson radical:
        `),
        T.Prose.parse(`
            1. The Jacobson radical is the intersection of all maximal ideals
        `),
        T.Prose.parse(`
            2. An element is in the Jacobson radical if and only if 1 plus any multiple of it is a unit
        `),
        T.Prose.parse(`
            3. The Jacobson radical contains all nilpotent elements
        `),
        T.Prose.parse(`
            4. In a local ring, the Jacobson radical equals the unique maximal ideal
        `),
        T.Prose.parse(`
            5. For finite rings, the Jacobson radical equals the nilradical
        `),
    ]),
],
    T.Prose.parse(`Examples of Jacobson Radicals in Various Rings`)
);