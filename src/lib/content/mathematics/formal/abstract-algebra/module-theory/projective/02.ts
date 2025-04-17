// 2Z/6Z over Z/6Z
// ----- 2Z/6Z = {0, 2, 4}
// ----- 2Z/6Z is not a free module
// ----- 2Z/6Z is a projective module (3z/6z + 2z/6z = z/6z) [over Z/6Z]

import * as T from "$book";

export const chapter_2 = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            First, note that $$2\\mathbb{Z}/6\\mathbb{Z} = \\{0, 2, 4\\}$$ as a subset of $$\\mathbb{Z}/6\\mathbb{Z}$$.
        `),
        T.Prose.parse(`
            To show $$2\\mathbb{Z}/6\\mathbb{Z}$$ is not free, observe that $$3 \\cdot 2 = 0$$ in $$\\mathbb{Z}/6\\mathbb{Z}$$. This means any generator has a non-zero annihilator, contradicting the definition of a free module.
        `),
        T.Prose.parse(`
            Consider $$3\\mathbb{Z}/6\\mathbb{Z} = \\{0, 3\\}$$ and $$2\\mathbb{Z}/6\\mathbb{Z} = \\{0, 2, 4\\}$$.
        `),
        T.Prose.parse(`
            For any element $$x \\in \\mathbb{Z}/6\\mathbb{Z}$$, we can write $$x = 3a + 2b$$ for some $$a, b \\in \\mathbb{Z}/6\\mathbb{Z}$$ (this is because $$\\gcd(2,3) = 1$$).
        `),
        T.Prose.parse(`
            Therefore, $$3\\mathbb{Z}/6\\mathbb{Z} + 2\\mathbb{Z}/6\\mathbb{Z} = \\mathbb{Z}/6\\mathbb{Z}$$, making $$2\\mathbb{Z}/6\\mathbb{Z}$$ a direct summand and thus projective.
        `),
    ]),
], 
    T.Prose.parse(`$$2\\mathbb{Z}/6\\mathbb{Z}$$`)
);
