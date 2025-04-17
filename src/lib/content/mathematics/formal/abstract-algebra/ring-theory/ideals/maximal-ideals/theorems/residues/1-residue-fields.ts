import * as T from "$book";

export const chapter = T.Exposition.from([

    T.Prose.parse(`
        The quotient of any unital commutative ring by any maximal ideal is always a field—called the residue field. Recall the difference between any unital commutative ring and any field: a field contains multiplicative inverses for every nonzero element. Moreover, recall that the quotient of any unital commutative ring by any ideal is always a unital commutative ring. Therefore, in order to prove that the quotient of any unital commutative ring by any maximal ideal is a field, it suffices to show that the residue contains multiplicative inverses for every nonzero element. In this section, we prove that this is indeed the case.
    `),

    T.List.numbered([
        T.Prose.parse(`
            Let $$\\mathcal{M}$$ be a maximal ideal in the unital commutative ring $$\\mathcal{R}$$.
        `),
        T.Prose.parse(`
            According to the definition of "maximal ideal", $$\\mathcal{M}$$ must be a proper ideal ($$\\mathcal{M} \\subset \\mathcal{R}$$). According to the definition of "subset", there exists at least one element $$r_0 \\in \\mathcal{R}$$, where $$r_0 \\notin \\mathcal{M}$$. Note, since $$0 \\in \\mathcal{M}$$, $$r_0 \\neq 0$$.
        `),
        T.Prose.parse(`
            Define the ideal $$\\mathcal{A} = \\langle r_0 \\rangle + \\mathcal{M}$$. According to the construction of an ideal, elements of $$\\mathcal{A}$$ are of the form $$r_0r + m$$, where $$r \\in \\mathcal{R}$$ and $$m \\in \\mathcal{M}$$.
        `),
        T.Prose.parse(`
            According to the definition of a maximal ideal, any ideal larger than $$\\mathcal{M}$$ must be the whole ring $$\\langle 1 \\rangle$$. Therefore, $$\\mathcal{A} = \\langle 1 \\rangle$$.
        `),
        T.Prose.parse(`
            According to the definition of an ideal, there exists an element $$r_k \\in \\mathcal{R}$$ and $$m_k \\in \\mathcal{M}$$ such that $$r_0 r_k + m_k = 1$$.
        `),
        T.Prose.parse(`
            According to the definition of a quotient $$\\mathcal{R} / \\mathcal{M}$$, every element of $$\\mathcal{M}$$ is equivalent to $$0$$. Therefore, $$m_k \\equiv 0$$, and $$r_0r_k + m_k = 1$$ simplifies to $$r_0r_k = 1$$.
        `),
        T.Prose.parse(`
            According to the definition of multiplicative inverses, $$r_0r_k = 1$$ implies that $$r_0$$ and $$r_k$$ are multiplicatively invertible in $$\\mathcal{R} / \\mathcal{M}$$.
        `),
    ]),

], T.Prose.parse(`Maximal Ideal $$\\to$$ Field`));
