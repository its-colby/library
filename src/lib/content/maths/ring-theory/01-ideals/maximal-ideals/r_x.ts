import * as T from "$lib/tex";

export const r_x = [

    T.Inline.parse(`
        Recall the following ideals of the unital commutative ring $$\\mathbb{R}[x]$$.
    `),

    new T.List([
        [
            T.Inline.parse(`
                $$\\langle \\ 2 \\ \\rangle = \\langle 1 \\rangle$$ This is because $$2 * \\frac{1}{2} = 1$$.
            `),
        ],
        [
            T.Inline.parse(`
                $$\\langle \\ x^2+4x+4 \\ \\rangle \\subset \\langle (x+2) \\rangle$$ This is because $$x^2+4x+4 = (x+2)^2$$.
            `),
        ],
        [
            T.Inline.parse(`
                $$\\langle \\ (x-4) \\ \\rangle$$ This is maximal.
            `),
        ],
        

    ]),

];