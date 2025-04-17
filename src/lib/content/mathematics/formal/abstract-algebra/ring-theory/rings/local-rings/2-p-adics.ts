import * as T from "$book";

export const chapter = T.Exposition.from([
    T.Prose.parse(`
        We prove that the ring of p-adic integers $$\\mathbb{Z}_p$$ is a local ring by showing it has a unique maximal ideal. Recall that elements of $$\\mathbb{Z}_p$$ are formal power series $$\\sum_{i=0}^{\\infty} a_ip^i$$ where $$a_i \\in \\{0,1,\\ldots,p-1\\}$$.
    `),

    T.List.numbered([
        T.Prose.parse(`
            First, we show that $$(p)$$ is a maximal ideal in $$\\mathbb{Z}_p$$. Elements of $$(p)$$ are those p-adic integers where $$a_0 = 0$$.
        `),
        T.Prose.parse(`
            The quotient $$\\mathbb{Z}_p/(p)$$ is isomorphic to $$\\mathbb{F}_p$$ (the field with $$p$$ elements), as each element of the quotient is represented by its constant term $$a_0$$ modulo $$p$$. Since this quotient is a field, $$(p)$$ is maximal.
        `),
        T.Prose.parse(`
            Now we show that every non-unit in $$\\mathbb{Z}_p$$ must be in $$(p)$$. Let $$x = \\sum_{i=0}^{\\infty} a_ip^i$$ be any p-adic integer.
        `),
        T.Prose.parse(`
            If $$a_0 \\neq 0$$, then $$x$$ is a unit in $$\\mathbb{Z}_p$$. This is because we can find its multiplicative inverse by solving for the coefficients recursively, starting with $$b_0 = a_0^{-1} \\bmod p$$.
        `),
        T.Prose.parse(`
            Therefore, if $$x$$ is not a unit, we must have $$a_0 = 0$$, which means $$x \\in (p)$$.
        `),
        T.Prose.parse(`
            This proves that $$(p)$$ contains all non-units of $$\\mathbb{Z}_p$$. Since any maximal ideal must contain all non-units, and $$(p)$$ is itself maximal, it must be the unique maximal ideal.
        `),
        T.Prose.parse(`
            Therefore, $$\\mathbb{Z}_p$$ is a local ring with unique maximal ideal $$(p)$$.
        `),
    ]),

], T.Prose.parse(`$$p$$-adic Integers are Local`));
