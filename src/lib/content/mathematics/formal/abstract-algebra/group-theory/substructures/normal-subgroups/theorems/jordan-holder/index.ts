import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        The following proof demonstrates the Jordan-Hölder Theorem, which states that any two composition series of a finite group are equivalent up to permutation of their factors.
    `),

    new T.Digression([
        T.List.numbered([
            T.Prose.parse(`
                Recall that a composition series of a group $$G$$ is a chain of subgroups $$G = G_0 \\triangleright G_1 \\triangleright \\cdots \\triangleright G_n = \\{e\\}$$ where each $$G_{i+1}$$ is a maximal normal subgroup of $$G_i$$.
            `),
            T.Prose.parse(`
                Recall that the composition factors are the quotient groups $$G_i/G_{i+1}$$, which are simple groups.
            `),
            T.Prose.parse(`
                Recall that two composition series are equivalent if they have the same length and their composition factors are isomorphic up to permutation.
            `),
        ]),
    ], "Prerequisite Material"),

    T.List.numbered([
        T.Prose.parse(`
            Let $$G$$ be a finite group with two composition series:
            $$G = G_0 \\triangleright G_1 \\triangleright \\cdots \\triangleright G_n = \\{e\\}$$
            and
            $$G = H_0 \\triangleright H_1 \\triangleright \\cdots \\triangleright H_m = \\{e\\}$$
        `),
        T.Prose.parse(`
            We proceed by induction on the order of $$G$$. If $$G$$ is simple, the result is trivial.
        `),
        T.Prose.parse(`
            If $$G_1 = H_1$$, then by induction, the composition series below $$G_1$$ are equivalent.
        `),
        T.Prose.parse(`
            If $$G_1 \\neq H_1$$, let $$K = G_1 \\cap H_1$$. Since $$G_1$$ and $$H_1$$ are maximal normal subgroups, $$K$$ is a proper normal subgroup of both.
        `),
        T.Prose.parse(`
            By the Second Isomorphism Theorem, $$G_1H_1/H_1 \\cong G_1/K$$ and $$G_1H_1/G_1 \\cong H_1/K$$.
        `),
        T.Prose.parse(`
            Since $$G_1$$ and $$H_1$$ are maximal normal subgroups, $$G_1H_1 = G$$, so $$G/H_1 \\cong G_1/K$$ and $$G/G_1 \\cong H_1/K$$.
        `),
        T.Prose.parse(`
            Let $$K = K_0 \\triangleright K_1 \\triangleright \\cdots \\triangleright K_r = \\{e\\}$$ be a composition series for $$K$$.
        `),
        T.Prose.parse(`
            Then we have two equivalent composition series:
            $$G \\triangleright G_1 \\triangleright K \\triangleright \\cdots \\triangleright \\{e\\}$$
            and
            $$G \\triangleright H_1 \\triangleright K \\triangleright \\cdots \\triangleright \\{e\\}$$
        `),
        T.Prose.parse(`
            By induction, these are equivalent to the original composition series, completing the proof.
        `),
    ]),

], T.Prose.parse(`Jordan-Hölder Theorem`)); 