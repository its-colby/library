// Z-module Z[i]
// ----- free module of rank 2, basis {1, i}
// ----- Z-module Z[i] is a ring

import * as T from "$book";

export const chapter_1 = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Consider $$\\mathbb{Z}[i] = \\{a + bi \\ | \\ a,b \\in \\mathbb{Z}\\}$$, the ring of Gaussian integers.
        `),
        T.Prose.parse(`
            Every element of $$\\mathbb{Z}[i]$$ can be uniquely written as $$a \\cdot 1 + b \\cdot i$$ where $$a,b \\in \\mathbb{Z}$$.
        `),
        T.Prose.parse(`
            To show $$\\{1,i\\}$$ is a basis, we must prove:
            1. It generates $$\\mathbb{Z}[i]$$ (already shown above)
            2. It is linearly independent over $$\\mathbb{Z}$$
        `),
        T.Prose.parse(`
            For linear independence, suppose $$a \\cdot 1 + b \\cdot i = 0$$ for some $$a,b \\in \\mathbb{Z}$$.
            Then $$a + bi = 0$$ implies $$a = 0$$ and $$b = 0$$ (since real and imaginary parts must be separately zero).
        `),
        T.Prose.parse(`
            Therefore, $$\\{1,i\\}$$ is a linearly independent generating set, making it a basis.
            This proves $$\\mathbb{Z}[i]$$ is a free $$\\mathbb{Z}$$-module of rank 2.
        `),
    ]),
], 
    T.Prose.parse(`$$\\mathbb{Z}[i]$$`)
);
