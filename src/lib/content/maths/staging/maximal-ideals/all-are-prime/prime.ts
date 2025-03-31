import * as T from "$lib/tex";

export const prime = [

    new T.List([
        T.Inline.parse(`
            Let $$\\mathcal{A}$$ be a maximal ideal in the unital commutative ring $$\\mathcal{R}$$.
        `),
        T.Inline.parse(`
            Now, assume that $$\\mathcal{A}$$ is not prime. Then, there exists $$a, b \\in \\mathcal{R}$$ such that $$ab \\in \\mathcal{A}$$ but $$a \\notin \\mathcal{A}$$ and $$b \\notin \\mathcal{A}$$.
        `),
        T.Inline.parse(`
            Since $$\\mathcal{A}$$ is maximal, and $$a \\notin \\mathcal{A}$$, then $$\\langle a, \\mathcal{A} \\rangle = \\mathcal{R}$$. Similarly, $$\\langle b, \\mathcal{A} \\rangle = \\mathcal{R}$$.
        `),
        T.Inline.parse(`
            This implies that $$1 = (ar + m)$$ and $$1 = (bs + n)$$ for some $$r, s \\in \\mathcal{R}$$ and $$m, n \\in \\mathcal{A}$$. By multiplying these, $$1 = (ar + m)(bs + n) = arbs + arn + mbs + mn$$. And, we can see that each term is in $$\\mathcal{A}$$, which means $$1 \\in \\mathcal{A}$$. This is a contradiction, so $$\\mathcal{A}$$ must be prime.
        `),
    ]),

];