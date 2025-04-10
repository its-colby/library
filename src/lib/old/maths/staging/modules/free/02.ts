// Z-module Z[x]
// ----- infinitely generated free module
// ----- basis = set of monomials {1, x, x^2, ...}
// ----- no torsion
// ----- z * f(x) + z_2 * g(x)

import * as T from "$lib/book";

export const chapter_2 = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Consider $$\\mathbb{Z}[x]$$, the ring of polynomials with integer coefficients.
        `),
        T.Prose.parse(`
            Every polynomial $$f(x) \\in \\mathbb{Z}[x]$$ can be uniquely written as $$f(x) = a_0 + a_1x + a_2x^2 + \\cdots + a_nx^n$$ where $$a_i \\in \\mathbb{Z}$$ and $$n \\geq 0$$.
        `),
        T.Prose.parse(`
            This shows that the set of monomials $$\\{1, x, x^2, \\ldots\\}$$ generates $$\\mathbb{Z}[x]$$ as a $$\\mathbb{Z}$$-module.
        `),
        T.Prose.parse(`
            For linear independence, suppose $$a_0 + a_1x + a_2x^2 + \\cdots + a_nx^n = 0$$ for some $$a_i \\in \\mathbb{Z}$$ and finite $$n$$.
        `),
        T.Prose.parse(`
            Since this is the zero polynomial, all coefficients must be zero: $$a_0 = a_1 = a_2 = \\cdots = a_n = 0$$.
            This proves the monomials are linearly independent.
        `),
        T.Prose.parse(`
            Therefore, $$\\{1, x, x^2, \\ldots\\}$$ is a basis for $$\\mathbb{Z}[x]$$, making it a free $$\\mathbb{Z}$$-module of infinite rank.
        `),
    ]),
], 
    T.Prose.parse(`$$\\mathbb{Z}[x]$$`)
);
