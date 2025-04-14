import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([

    T.Prose.parse(`
        The quotient a unital ring by a maximal left ideal, we obtain a simple left module (over the original ring). The conclusion can be reached with a maximal right ideal, and a simple right module, respectively. Recall that the quotient of a unital ring by any one-sided ideal is always a module. Recall that the difference between a module and a simple module is that a simple module has no proper submodules except for the zero module. Therefore, in order to prove that the quotient of a unital ring by a maximal left ideal is a simple left module, it suffices to show that the residue contains no nonzero proper submodules. In this section, we prove that this is indeed the case.
    `),

    T.Prose.parse(`
        Note, the following proof is almost identical to the proof for residue simple rings. The key difference is in the preimages of the homomorphisms $$\\phi: \\mathcal{R} \\to \\mathcal{R}/\\mathcal{M}$$. When $$\\mathcal{M}$$ is two-sided, the homomorphism is a ring homomorphism, and the preimage of a two-sided ideal is a two-sided ideal. But, when $$\\mathcal{M}$$ is a left ideal, the homomorphism is a surjective module homomorphism, and the preimage of a left ideal is not always a left ideal. However, in this case, the preimage of a left $$\\mathcal{R}$$-module is still a left $$\\mathcal{R}$$-module (and therefore a left ideal in $$\\mathcal{R}$$). 
    `),

    T.List.numbered([
        T.Prose.parse(`
            Let $$\\mathcal{M}$$ be a maximal left ideal in the unital ring $$\\mathcal{R}$$.
        `),
        T.Prose.parse(`
            Let $$\\mathcal{B}$$ be the left module $$\\mathcal{R}/\\mathcal{M}$$ over the ring $$\\mathcal{R}$$. According to the definition of a module, elements of $$\\mathcal{B}$$ will be of the form $$b + \\mathcal{M}$$, and when these elements are multiplied by a scalar $$r \\in \\mathcal{R}$$, the result is $$r(b + \\mathcal{M}) = rb + \\mathcal{M}$$.
        `),
        T.Prose.parse(`
            Let $$\\phi: \\mathcal{R} \\to \\mathcal{R}/\\mathcal{M}$$ be a surjective ring homomorphism.
        `),
        T.Prose.parse(`
            According to the definition of a module, $$0 \\in \\mathcal{B}$$. And, since $$\\mathcal{B}$$ is defined to be nonzero, there must exist some element $$b \\in \\mathcal{B}$$ where $$b \\neq 0$$.
        `),
        T.Prose.parse(`
            By the properties of a ring homomorphism, the preimage of $$\\mathcal{B}$$ ($$\\phi^{-1}(\\mathcal{B})$$) is a left $$\\mathcal{R}$$ module in $$\\mathcal{R}$$, which is also a left ideal in $$\\mathcal{R}$$. Let this left ideal be denoted $$\\mathcal{A}$$.
        `),
        T.Prose.parse(`
            Consider the preimages of $$0$$ and $$b$$ under $$\\phi$$. According to the definition of a quotient, the preimage of $$0$$ ($$\\text{ker}(\\phi)$$) is $$\\mathcal{M}$$. And, since $$b \\notin \\text{ker}(\\phi)$$, the preimage of $$b$$ is not $$\\mathcal{M}$$.
        `),
        T.Prose.parse(`
            The preimages of $$0$$ ($$\\mathcal{M}$$) and $$b$$ (some element not in $$\\mathcal{M}$$) under $$\\phi$$ are in $$\\mathcal{A}$$. Therefore, $$\\mathcal{M} \\subset \\mathcal{A}$$. But, according to the definition of a left maximal ideal, $$\\mathcal{A}$$ must be $$\\mathcal{R}$$.
        `),
        T.Prose.parse(`
           According to the definition of a module homomorphism, the image of $$\\mathcal{R}$$ under $$\\phi$$ is $$\\mathcal{R}/\\mathcal{M}$$. And, the image of $$\\mathcal{A}$$ under $$\\phi$$ is $$\\mathcal{B}$$. And since $$\\mathcal{A} = \\mathcal{R}$$, we have $$\\mathcal{B} = \\mathcal{R}/\\mathcal{M}$$. Therefore, the only nonzero left module $$\\mathcal{B}$$ in $$\\mathcal{R}/\\mathcal{M}$$ is the entire module.
        `),
    ]),

], T.Prose.parse(`Maximal Left Ideal $$\\to$$ Simple Left Module`));
