import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([

    T.Prose.parse(`
        The quotient of any unital ring by any two-sided maximal ideal is a simple ring. Recall that the difference between a simple ring and a unital ring is that a simple ring contains no nonzero proper two-sided ideals. Recall that the quotient of a unital ring by a two-sided ideal is always a unital ring. Therefore, in order to prove that the quotient of any unital ring by any two-sided maximal ideal is a simple ring, it suffices to show that the residue contains no nonzero proper two-sided ideals. In this section, we prove that this is indeed the case.
    `),

    T.Prose.parse(`
        Note, when the unital ring is commutative, the residue is a simple commutative ring. And, every simple commutative ring is a field. This chain of reasoning is another way of proving that the quotient of any unital commutative ring by any maximal ideal is a field.
    `),

    T.List.numbered([
        T.Prose.parse(`
            Let $$\\mathcal{M}$$ be a two-sided maximal ideal in the unital ring $$\\mathcal{R}$$.
        `),
        T.Prose.parse(`
            Let $$\\mathcal{B}$$ be any nonzero two-sided ideal in $$\\mathcal{R}/\\mathcal{M}$$.
        `),
        T.Prose.parse(`
            Let $$\\phi: \\mathcal{R} \\to \\mathcal{R}/\\mathcal{M}$$ be a unital surjective ring homomorphism.
        `),
        T.Prose.parse(`
            According to the definition of an ideal, $$0 \\in \\mathcal{B}$$. And, since $$\\mathcal{B}$$ is defined to be nonzero, there must exist some element $$b \\in \\mathcal{B}$$ where $$b \\neq 0$$.
        `),
        T.Prose.parse(`
            By the properties of a ring homomorphism, the preimage of $$\\mathcal{B}$$ ($$\\phi^{-1}(\\mathcal{B})$$) is a two-sided ideal in $$\\mathcal{R}$$. Let $$\\mathcal{A} = \\phi^{-1}(\\mathcal{B})$$.
        `),
        T.Prose.parse(`
            Consider the preimages of $$0$$ and $$b$$ under $$\\phi$$. According to the definition of a quotient, the preimage of $$0$$ ($$\\text{ker}(\\phi)$$) is $$\\mathcal{M}$$. And, since $$b \\notin \\text{ker}(\\phi)$$, the preimage of $$b$$ is not $$\\mathcal{M}$$.
        `),
        T.Prose.parse(`
            The preimages of $$0$$ ($$\\mathcal{M}$$) and $$b$$ (some element not in $$\\mathcal{M}$$) under $$\\phi$$ are in $$\\mathcal{A}$$. Therefore, $$\\mathcal{M} \\subset \\mathcal{A}$$. But, according to the definition of a maximal ideal, $$\\mathcal{A}$$ must be $$\\mathcal{R}$$.
        `),
        T.Prose.parse(`
           According to the definition of a ring homomorphism, the image of $$\\mathcal{R}$$ under $$\\phi$$ is $$\\mathcal{R}/\\mathcal{M}$$. And, the image of $$\\mathcal{A}$$ under $$\\phi$$ is $$\\mathcal{B}$$. And since $$\\mathcal{A} = \\mathcal{R}$$, we have $$\\mathcal{B} = \\mathcal{R}/\\mathcal{M}$$. Therefore, the only nonzero two-sided ideal $$\\mathcal{B}$$ in $$\\mathcal{R}/\\mathcal{M}$$ is the entire ring.
        `),
    ]),

], T.Prose.parse(`2-Sided Maximal Ideal $$\\to$$ Simple Ring`));
