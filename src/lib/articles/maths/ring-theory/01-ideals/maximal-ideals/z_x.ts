import * as T from "$lib/tex";

export const z_x = [

    T.Inline.parse(`
        Examine the relationships among the following ideals of $$\\mathbb{Z[x]}$$.
    `),

    new T.List([
        [
            T.Inline.parse(`
                $$\\langle \\ 2x + 4 \\ \\rangle \\subset \\langle \\ 2 \\ \\rangle$$. This is because, in the realm of $$\\mathbb{Z}[x]$$, $$2x +4$$ is a multiple of $$2$$, namely $$2(x + 2)$$.
            `),
            new T.List([
                T.Inline.parse(`
                    Elements of $$\\langle 2 \\rangle$$ are of the form $$2 \\cdot f$$, where $$f \\in \\mathbb{Z}[x]$$.
                `),
                T.Inline.parse(`
                    Let $$f$$ be a particular function, namely $$f_k = g \\cdot (x+2)$$ where $$g \\in \\mathbb{Z}[x]$$. Whereas $$\\{ 2 \\cdot f \\} = \\langle 2 \\rangle$$, now $$\\{ 2 \\cdot f_k \\} \\subset \\langle 2 \\rangle$$.
                `),
                T.Inline.parse(`
                    Elements of $$\\langle 2x + 4 \\rangle$$ are of the form $$(2x + 4) \\cdot g$$, where $$g$$ was defined above as any possible polynomial of $$\\mathbb{Z}[x]$$.
                `),
                T.Inline.parse(`
                    $$\\{ (2x + 4) \\cdot g \\} = \\{ 2 \\cdot g(x + 2) \\} = \\{2 \\cdot f_k \\}$$. This means $$\\langle 2x + 4 \\rangle = \\{2 \\cdot f_k \\}$$, which means $$\\langle 2x + 4 \\rangle \\subset \\langle 2 \\rangle$$.
                `),
                T.Inline.parse(`
                    Therefore, $$\\langle 2x + 4 \\rangle$$ is not maximal.
                `),
            ])
        ],
        [T.Inline.parse(`
            $$\\langle \\ 2, \\ 2x^2 + x + 1 \\ \\rangle \\subset \\langle \\ 2, \\ x + 1 \\ \\rangle$$ This is because $$2$$ and $$2(x^2) + (x + 1)(1)$$, the respective generating elements of $$\\langle \\ 2, \\ 2x^2 + x + 1 \\ \\rangle$$, are found in $$\\langle \\ 2, \\ x + 1 \\ \\rangle$$, along with other non-intersecting elements, such as $$x + 1$$.
        `)],
        [T.Inline.parse(`$$\\langle \\ 2, \\ x + 1 \\ \\rangle$$`)],
        [T.Inline.parse(`$$\\langle \\ 2, \\ 2x^2 + x + 1 \\ \\rangle$$`)],
        [T.Inline.parse(`
            $$\\langle \\ 2x + 4 \\ \\rangle = \\langle \\ 2(x + 2 ) \\ \\rangle \\subset \\langle \\ 2 \\ \\rangle$$
        `)],
    ]),

    // new T.List([
    //     T.Inline.parse(`
    //         $$\\langle \\ 2, \\ x \\ \\rangle = 
    //         \\{ \\ 0, \\ 2, \\ x, \\ 2(x) + (x)(1), \\ \\ldots \\ \\} $$
    //     `),
    //     T.Inline.parse(`
    //         $$\\langle 2, x + 1 \\rangle = 
    //         \\{ 0, 2, (x + 1), 2(x^2) + (x + 1)(1), \\ldots \\} $$
    //     `),
    //     T.Inline.parse(`
    //         $$\\langle 2, 2x^2 + x + 1 \\rangle = 
    //         \\{ 0, 2, 2(0) + (2x^2 + x + 1)(1), \\ldots \\} $$
    //     `),
    //     T.Inline.parse(`
    //         $$\\langle 2 \\rangle =
    //         \\{ 0, 2, 2(5), 2(x + 2), 2(x^2 + 4x + 4), \\ldots \\} $$
    //     `),
    //     T.Inline.parse(`
    //         $$\\langle 2x + 4 \\rangle =
    //         \\{ 0, 2x + 4, (2x + 4)(x + 2), \\ldots \\} $$
    //     `),
    // ]),

    new T.List([
        T.Inline.parse(`
            $$\\langle 2, x \\rangle$$ and $$\\langle 2, x + 1 \\rangle$$ are both maximal, as they are not contained in any other ideal. Although they do share common elements, for instance $$2$$, one does not contain the other. $$\\langle 2, x \\rangle$$ will never contain $$x + 1$$. And, $$\\langle 2, x + 1 \\rangle$$ will never contain $$x$$.
        `),
        T.Inline.parse(`
            $$\\langle 2, 2x^2 + x + 1 \\rangle$$ is not maximal, as it is contained in $$\\langle 2, x + 1 \\rangle$$. $$\\langle 2, x + 1 \\rangle$$ trivially contains $$2$$ ($$2(1) + (x + 1)(0)$$). And, $$\\langle 2, x + 1 \\rangle$$ also contains $$2x^2 + x + 1$$ ($$2(x^2) + (x + 1)(1)$$).
        `),
        T.Inline.parse(`
            $$\\langle 2 \\rangle$$ is not maximal, as it is trivially contained in $$\\langle 2, x \\rangle$$, $$\\langle 2, x + 1 \\rangle$$, and $$\\langle 2, 2x^2 + x + 1 \\rangle$$.
        `),
        T.Inline.parse(`
            $$\\langle 2x + 4 \\rangle$$ is not maximal, as it is contained in $$\\langle 2 \\rangle$$ ($$2(x+2)$$).
        `),
    ]),

    T.Inline.parse(`
        Evidently, there is a pattern here, albeit not a particularly obvious one. All ideals are of the following form, for any prime number $$p$$ and any polynomial $$f(x)$$ in $$\\mathbb{F}_p[x]$$, are maximal ideals.
    `),

    T.Block.from_single_statement(
        new T.Tex(`
            \\langle p, f(x) \\rangle
        `)
    ),

    T.Inline.parse(`
        We will now look at some intuition (not a proof) for such a general form, in case it was not immediately obvious.
    `),

    T.Inline.parse(`
        Recall $$\\langle 2, 2x^2 + x + 1 \\rangle$$. Notice that $$2x^2$$ is contained in $$\\langle 2 \\rangle$$. As a result, although $$x + 1$$ is not a multiple of $$2x^2 + x + 1$$, the ideal $$\\langle 2, x + 1 \\rangle$$ was still able to recreate $$2x^2 + x + 1$$ ($$2(x^2) + (x + 1)(1)$$).
    `),

    T.Inline.parse(`
        Now, imagine the ideal $$2, 4x^2 + 5x + 1$$. Notice, even this ideal is contained in $$\\langle 2, x + 1 \\rangle$$. For example, $$4x^2 + 5x + 1 = 2(2x^2 + 3x + 1) - (x + 1)$$. In other words, $$4x^2 + 5x + 1 \\equiv -(x + 1) \\equiv x + 1 \\pmod{2}$$. 
    `),

];