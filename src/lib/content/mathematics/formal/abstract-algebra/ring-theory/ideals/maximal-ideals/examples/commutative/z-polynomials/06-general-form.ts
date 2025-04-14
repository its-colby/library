import * as T from "$lib/book";

export const chapter_6 = T.BookChapter.from_exposition([
    T.Prose.parse(`
        We characterize the maximal ideals in $$\\mathbb{Z}[x]$$. We will prove that every maximal ideal has the form $$(p, f)$$ where $$p$$ is a prime number and $$f$$ is a polynomial that is irreducible modulo $$p$$.
    `),

    T.List.numbered([
        T.Prose.parse(`
            Let $$\\mathcal{M}$$ be a maximal ideal in $$\\mathbb{Z}[x]$$.
        `),
        T.Prose.parse(`
            First, we show that $$\\mathcal{M}$$ must contain a prime number $$p$$. Consider $$\\mathcal{M} \\cap \\mathbb{Z}$$. This is an ideal in $$\\mathbb{Z}$$, and it cannot be $$(0)$$ as this would make $$\\mathcal{M}$$ contained in the non-maximal ideal $$(x)$$. Therefore, $$\\mathcal{M} \\cap \\mathbb{Z} = (p)$$ for some prime $$p$$.
        `),
        T.Prose.parse(`
            Next, we show that $$\\mathcal{M}$$ must contain a non-constant polynomial. If not, then $$\\mathcal{M} = (p)$$, but $$(p)$$ is not maximal in $$\\mathbb{Z}[x]$$ as $$(p) \\subsetneq (p, x) \\subsetneq \\mathbb{Z}[x]$$.
        `),
        T.Prose.parse(`
            Let $$f$$ be a non-constant polynomial in $$\\mathcal{M}$$ of minimal degree. We can assume $$f$$ is primitive (its coefficients are coprime) by dividing out any common factors.
        `),
        T.Prose.parse(`
            Consider the image of $$f$$ in $$(\\mathbb{Z}/p\\mathbb{Z})[x]$$. This polynomial $$\\bar{f}$$ must be irreducible in $$(\\mathbb{Z}/p\\mathbb{Z})[x]$$. If not, it would factor as $$\\bar{f} = \\bar{g}\\bar{h}$$, and lifting this factorization would show that $$\\mathcal{M}$$ contains a polynomial of lower degree than $$f$$.
        `),
        T.Prose.parse(`
            Therefore, $$\\mathcal{M}$$ contains $$(p, f)$$. This is a maximal ideal because $$(\\mathbb{Z}[x])/(p, f) \\cong (\\mathbb{Z}/p\\mathbb{Z})[x]/(\\bar{f})$$ is a field. By maximality of $$\\mathcal{M}$$, we must have $$\\mathcal{M} = (p, f)$$.
        `),
        T.Prose.parse(`
            Conversely, any ideal of the form $$(p, f)$$ where $$p$$ is prime and $$f$$ is irreducible modulo $$p$$ is maximal, as the quotient is a field.
        `),
    ]),

], T.Prose.parse(`Generalized Example: $$\\langle p, f \\mod p \\rangle$$`));


// prove p must be contained in the ideal
// prove non-constant p must be in the ideal
// prove the non-constant p must be irreducible mod p
// prove that any further constant or non-constant would be unital