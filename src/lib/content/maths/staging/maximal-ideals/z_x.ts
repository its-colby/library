import * as T from "$lib/book";

const z_x = [

    T.Prose.parse(`
        We will now investigate whether particular ideals of $$\\mathbb{Z[x]}$$ are maximal.
    `),

    new T.List([
        T.Prose.parse(`
            $$\\langle \\ 2x + 4 \\ \\rangle \\subset \\langle \\ 2 \\ \\rangle$$. This is because, in the realm of $$\\mathbb{Z}[x]$$, $$2x +4$$ is a multiple of $$2$$, namely $$2(x + 2)$$.
        `),

        new T.List([
            T.Prose.parse(`
                Elements of $$\\langle 2 \\rangle$$ are of the form $$2 \\cdot f$$, where $$f \\in \\mathbb{Z}[x]$$.
            `),
            T.Prose.parse(`
                Let $$f$$ be a particular function, namely $$f_k = g \\cdot (x+2)$$ where $$g \\in \\mathbb{Z}[x]$$. Whereas $$\\{ 2 \\cdot f \\} = \\langle 2 \\rangle$$, now $$\\{ 2 \\cdot f_k \\} \\subset \\langle 2 \\rangle$$.
            `),
            T.Prose.parse(`
                Elements of $$\\langle 2x + 4 \\rangle$$ are of the form $$(2x + 4) \\cdot g$$, where $$g$$ was defined above as any possible polynomial of $$\\mathbb{Z}[x]$$.
            `),
            T.Prose.parse(`
                $$\\{ (2x + 4) \\cdot g \\} = \\{ 2 \\cdot g(x + 2) \\} = \\{2 \\cdot f_k \\}$$. This means $$\\langle 2x + 4 \\rangle = \\{2 \\cdot f_k \\}$$, which means $$\\langle 2x + 4 \\rangle \\subset \\langle 2 \\rangle$$.
            `),
            T.Prose.parse(`
                Therefore, $$\\langle 2x + 4 \\rangle$$ is not maximal.
            `),
        ]),

        T.Prose.parse(`
            $$\\langle 2 \\rangle \\subset \\langle \\ 2, \\ 2x^2 + x + 1 \\ \\rangle$$
        `),

        new T.List([
            T.Prose.parse(`
                Elements of $$\\langle \\ 2, \\ 2x^2 + x + 1 \\ \\rangle$$ are of the form $$2 \\cdot f + (2x^2 + x + 1) \\cdot g$$, where $$f, g \\in \\mathbb{Z}[x]$$.
            `),
            T.Prose.parse(`
                Let both $$f$$ and $$g$$ be particular functions, $$f_k$$ and $$g_k$$, where $$f_k$$ is a polynomial $$p \\in \\mathbb{Z}[x]$$ and $$g_k$$ is the constant polynomial $$0$$. In other words, $$2 \\cdot f_k + (2x^2 + x + 1) \\cdot g_k$$ simplifies to $$2 \\cdot p$$. This means that $$\\{ 2 \\cdot p \\} \\subset \\langle 2, 2x^2 + x + 1 \\rangle$$.
            `),
            T.Prose.parse(`
                $$\\{ 2 \\cdot p \\} = \\langle 2 \\rangle$$, which means $$\\langle 2 \\rangle \\subset \\langle 2, 2x^2 + x + 1 \\rangle$$.
            `),
            T.Prose.parse(`
                Therefore, $$\\langle 2 \\rangle$$ is not maximal.
            `),
        ]),

        T.Prose.parse(`
            $$\\langle \\ 2, \\ 2x^2 + x + 1 \\ \\rangle \\subset \\langle \\ 2, \\ x + 1 \\ \\rangle$$
        `),

        new T.List([
            T.Prose.parse(`
                Elements of $$\\langle \\ 2, \\ x + 1 \\ \\rangle$$ are of the form $$2 \\cdot f + (x + 1) \\cdot g$$, where $$f, g \\in \\mathbb{Z}[x]$$.
            `),
            T.Prose.parse(`
                Let both $$f$$ and $$g$$ be particular functions, $$f_k$$ and $$g_k$$. Let $$f_k = x^2q + p$$, where $$p,q \\in \\mathbb{Z}[x]$$. Let $$g_k =q$$. In other words, $$2 \\cdot f_k + (x + 1) \\cdot g_k$$ simplifies to $$2x^2q + 2p + (x + 1)q$$. This means that $$\\{ 2p + (2x^2 + x + 1)q\\} \\subset \\langle 2, x + 1 \\rangle$$.
            `),
            T.Prose.parse(`
                $$\\{ 2p + (2x^2 + x + 1)q\\} = \\langle 2, 2x^2 + x + 1 \\rangle$$, which means $$\\langle 2, 2x^2 + x + 1 \\rangle \\subset \\langle 2, x + 1 \\rangle$$.
            `),
            T.Prose.parse(`
                Therefore, $$\\langle 2, 2x^2 + x + 1 \\rangle$$ is not maximal.
            `),
        ]),

        T.Prose.parse(`
            $$\\langle \\ 2, \\ 4x^2 + 5x + 3 \\ \\rangle \\subset \\langle \\ 2, \\ x + 1 \\ \\rangle$$
        `),

        new T.List([
            T.Prose.parse(`
                Elements of $$\\langle \\ 2, \\ x + 1 \\ \\rangle$$ are of the form $$2 \\cdot f + (x + 1) \\cdot g$$, where $$f, g \\in \\mathbb{Z}[x]$$.
            `),
            T.Prose.parse(`
                Let both $$f$$ and $$g$$ be particular functions, $$f_k$$ and $$g_k$$. Let $$f_k = 2x^2q + xq + 1p$$, where $$p,q \\in \\mathbb{Z}[x]$$. Let $$g_k = 3q$$. In other words, $$2 \\cdot f_k + (x + 1) \\cdot g_k$$ simplifies to $$4x^2q + 2xq + 2p + 3q(x + 1)$$. This means that $$\\{ 2p + (4x^2 + 5x + 3)q\\} \\subset \\langle 2, x + 1 \\rangle$$.
            `),
            T.Prose.parse(`
                $$\\{ 2p + (4x^2 + 5x + 1)q\\} = \\langle 2, 4x^2 + 5x + 1 \\rangle$$, which means $$\\langle 2, 4x^2 + 5x + 1 \\rangle \\subset \\langle 2, x + 1 \\rangle$$.
            `),
            T.Prose.parse(`
                Therefore, $$\\langle 2, 4x^2 + 5x + 1 \\rangle$$ is not maximal.
            `),
        ]),

        T.Prose.parse(`
            $$\\langle \\ 2, \\ x + 1, x^2 \\ \\rangle = \\langle 1 \\rangle$$
        `),

        new T.List([
            T.Prose.parse(`
                Elements of $$\\langle \\ 2, \\ x + 1 \\ , x^2 \\ \\rangle$$ are of the form $$2f + (x + 1)g + x^2h$$, where $$f, g, h \\in \\mathbb{Z}[x]$$.
            `),
            T.Prose.parse(`
                Let both $$f$$, $$g$$, $$h$$ be particular functions, $$f_k$$, $$g_k$$, $$h_k$$. Let $$f_k = -xp$$, $$g_k = (x+1)p$$, and $$h_k = -p$$, where $$p \\in \\mathbb{Z}[x]$$. In other words, $$2f_k + (x + 1)g_k + x^2h_k$$ simplifies to $$-2xp + (x^2 + 2x + 1)p - x^2p = 1p$$.
            `),
            T.Prose.parse(`
                $$\\{ 1p \\} = \\langle 1 \\rangle$$, which means $$\\langle 2, x + 1, x \\ \\rangle = \\langle 1 \\rangle$$.
            `),
            T.Prose.parse(`
                Therefore, $$\\langle 2, x + 1, x \\ \\rangle$$ is not maximal, as it is a unital ideal.
            `),
        ])
    ]),

    T.Prose.parse(`
        Evidently, there is a pattern here, albeit not a particularly obvious one. All ideals are of the following form, for any prime number $$p$$ and any polynomial $$f(x)$$ in $$\\mathbb{F}_p[x]$$, are maximal ideals.
    `),

    new T.Expression(
        new T.Tex(`
            \\langle p, f(x) \\rangle
        `)
    ),

    T.Prose.parse(`
        We will now look at some intuition (not a proof) for such a general form, in case it was not immediately obvious.
    `),

    T.Prose.parse(`
        Recall $$\\langle 2, 2x^2 + x + 1 \\rangle$$. Notice that $$2x^2$$ is contained in $$\\langle 2 \\rangle$$. As a result, although $$x + 1$$ is not a multiple of $$2x^2 + x + 1$$, the ideal $$\\langle 2, x + 1 \\rangle$$ was still able to recreate $$2x^2 + x + 1$$ ($$2(x^2) + (x + 1)(1)$$).
    `),

    T.Prose.parse(`
        Now, imagine the ideal $$2, 4x^2 + 5x + 1$$. Notice, even this ideal is contained in $$\\langle 2, x + 1 \\rangle$$. For example, $$4x^2 + 5x + 1 = 2(2x^2 + 3x + 1) - (x + 1)$$. In other words, $$4x^2 + 5x + 1 \\equiv -(x + 1) \\equiv x + 1 \\pmod{2}$$. 
    `),

];

export const z_x_chapter = T.BookChapter.from_exposition(
    z_x,
    T.Prose.parse(`$$\\mathbb{Z}[x]$$`)
)


// prove p, p(x)
// prove quotient is field