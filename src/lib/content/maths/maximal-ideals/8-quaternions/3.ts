// left ideal (j + k) is maximal

import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Elements of the left ideal $$\\langle j+k \\rangle$$ are of the form $$q(j+k)$$, where $$q \\in \\mathbb{H}$$.
        `),
        T.Prose.parse(`
            Let $$I$$ be any left ideal properly containing $$\\langle j+k \\rangle$$. Then there exists some element $$x = a+bi+cj+dk \\in I$$ that is not in $$\\langle j+k \\rangle$$.
        `),
        T.Prose.parse(`
            Consider the element $$x(j-k)$$. Since $$I$$ is a left ideal, this is also in $$I$$. Computing:
            $$(a+bi+cj+dk)(j-k) = (-c-d) + (-d+c)i + (a-bi)j + (-a+bi)k$$
        `),
        T.Prose.parse(`
            Also, since $$j+k \\in I$$, we can take linear combinations. In particular:
            $$x(j-k) + x(j+k) = 2xj$$ and $$x(j-k) - x(j+k) = -2xk$$ are both in $$I$$.
        `),
        T.Prose.parse(`
            From these elements and their quaternion products, we can generate $$1$$, $$i$$, $$j$$, and $$k$$ in $$I$$. Therefore, $$I = \\mathbb{H}$$.
        `),
        T.Prose.parse(`
            This proves that any left ideal properly containing $$\\langle j+k \\rangle$$ must be all of $$\\mathbb{H}$$, making $$\\langle j+k \\rangle$$ maximal.
        `),
    ]),
], 
    T.Prose.parse(`Example: $$\\langle j+k \\rangle$$ is Maximal`)
);
