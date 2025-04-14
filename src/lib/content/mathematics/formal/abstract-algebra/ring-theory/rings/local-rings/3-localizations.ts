// The ring of localizations of a commutative ring at a prime ideal:

import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.Prose.parse(`
        Let $$R$$ be a commutative ring and $$\\mathfrak{p}$$ a prime ideal. We prove that the localization $$R_\\mathfrak{p}$$ (elements of the form $$\\frac{r}{s}$$ where $$r \\in R$$ and $$s \\in R \\setminus \\mathfrak{p}$$) is a local ring.
    `),

    T.List.numbered([
        T.Prose.parse(`
            First, consider the set $$\\mathfrak{p}R_\\mathfrak{p} = \\{\\frac{p}{s} : p \\in \\mathfrak{p}, s \\in R \\setminus \\mathfrak{p}\\}$$. This is an ideal in $$R_\\mathfrak{p}$$.
        `),
        T.Prose.parse(`
            We claim that any element $$\\frac{r}{s} \\in R_\\mathfrak{p}$$ is either a unit or in $$\\mathfrak{p}R_\\mathfrak{p}$$.
        `),
        T.Prose.parse(`
            If $$r \\notin \\mathfrak{p}$$, then $$\\frac{r}{s}$$ is a unit in $$R_\\mathfrak{p}$$ because $$r \\in R \\setminus \\mathfrak{p}$$, so $$\\frac{s}{r}$$ exists in $$R_\\mathfrak{p}$$ and is its inverse.
        `),
        T.Prose.parse(`
            If $$r \\in \\mathfrak{p}$$, then $$\\frac{r}{s} = \\frac{r}{s} \\cdot 1 \\in \\mathfrak{p}R_\\mathfrak{p}$$.
        `),
        T.Prose.parse(`
            Therefore, $$\\mathfrak{p}R_\\mathfrak{p}$$ contains all non-units of $$R_\\mathfrak{p}$$.
        `),
        T.Prose.parse(`
            Moreover, $$\\mathfrak{p}R_\\mathfrak{p}$$ is maximal: if $$\\frac{r}{s} \\notin \\mathfrak{p}R_\\mathfrak{p}$$, then $$r \\notin \\mathfrak{p}$$, making $$\\frac{r}{s}$$ a unit.
        `),
        T.Prose.parse(`
            This proves that $$R_\\mathfrak{p}$$ is a local ring with unique maximal ideal $$\\mathfrak{p}R_\\mathfrak{p}$$.
        `),
    ]),

], T.Prose.parse(`Localizations are Local`));
