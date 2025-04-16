// Z-module Complex C[x]
// ----- infinitely generated free module
// ----- basis = uncountably inifinite, {x^n * c | n in N, c in C}
// ----- torsion-free

import * as T from "$book";

export const chapter_3 = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Consider $$\\mathbb{C}[x]$$, the ring of polynomials with complex coefficients, as a $$\\mathbb{Z}$$-module.
        `),
        T.Prose.parse(`
            Every polynomial $$f(x) \\in \\mathbb{C}[x]$$ can be written as $$f(x) = \\sum_{k=0}^n c_kx^k$$ where $$c_k \\in \\mathbb{C}$$.
        `),
        T.Prose.parse(`
            Each complex coefficient $$c_k$$ can be written uniquely as a $$\\mathbb{Z}$$-linear combination of elements from $$\\mathbb{C}$$, as $$\\mathbb{C}$$ is a vector space over $$\\mathbb{Q}$$ (and thus over $$\\mathbb{Z}$$).
        `),
        T.Prose.parse(`
            Therefore, the set $$\\{x^n \\cdot c \\ | \\ n \\in \\mathbb{N}, c \\in \\mathbb{C}\\}$$ generates $$\\mathbb{C}[x]$$ as a $$\\mathbb{Z}$$-module.
        `),
        T.Prose.parse(`
            For linear independence, suppose $$\\sum_{i=1}^m z_i(x^{n_i} \\cdot c_i) = 0$$ for some $$z_i \\in \\mathbb{Z}$$, distinct $$n_i \\in \\mathbb{N}$$, and $$c_i \\in \\mathbb{C}$$.
        `),
        T.Prose.parse(`
            Collecting terms with the same power of $$x$$, each coefficient must be zero. Since the $$c_i$$ are complex numbers and $$\\mathbb{Z}$$ embeds in $$\\mathbb{C}$$, this implies all $$z_i = 0$$.
        `),
        T.Prose.parse(`
            Therefore, $$\\{x^n \\cdot c \\ | \\ n \\in \\mathbb{N}, c \\in \\mathbb{C}\\}$$ is a basis. Since $$\\mathbb{C}$$ is uncountable, this basis is uncountably infinite.
        `),
    ]),
], 
    T.Prose.parse(`$$\\mathbb{C}[x]$$`)
);
