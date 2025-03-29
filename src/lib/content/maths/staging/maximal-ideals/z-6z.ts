import * as T from "$lib/tex";

export const z_6z = [

    T.Inline.parse(`
        Recall the ideals of the unital non-commutative ring $$\\mathbb{Z}/6\\mathbb{Z}$$.
    `),

    new T.List([
        T.Inline.parse(`
            $$\\langle 0 \\rangle = 
            \\{ 0 \\}$$
        `),
        T.Inline.parse(`
            $$\\langle 1 \\rangle = 
            \\langle 5 \\rangle = \\{ 0, 1, 2, 3, 4, 5 \\}$$
        `),
        T.Inline.parse(`
            $$\\langle 2 \\rangle = 
            \\langle 4 \\rangle = \\{ 0, 2, 4 \\}$$
        `),
        T.Inline.parse(`
            $$\\langle 3 \\rangle = 
            \\langle 3 \\rangle = \\{ 0, 3 \\}$$
        `),
    ]),

    new T.List([
        T.Inline.parse(`
            $$\\langle 0 \\rangle$$ is contained in all other ideals, and thus, is not maximal.
        `),
        T.Inline.parse(`
            $$\\langle 1 \\rangle$$ is the unital ideal, and thus, not a proper ideal, and thus, not maximal.
        `),
        T.Inline.parse(`
            $$\\langle 2 \\rangle$$ is maximal, as it is not contained in any other ideal.
        `),
        T.Inline.parse(`
            $$\\langle 3 \\rangle$$ is maximal, as it is not contained in any other ideal.
        `),
    ]),

]
    