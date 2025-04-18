import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Consider the rotational symmetries of a regular pentagon. These are rotations by $$0^\\circ, 72^\\circ, 144^\\circ, 216^\\circ,$$ and $$288^\\circ$$.
        `),
        T.Prose.parse(`
            Let $$r$$ be the rotation by $$72^\\circ$$. Then all rotations can be expressed as powers of $$r$$:
            - $$r^0 = 0^\\circ$$ rotation (identity)
            - $$r^1 = 72^\\circ$$ rotation
            - $$r^2 = 144^\\circ$$ rotation
            - $$r^3 = 216^\\circ$$ rotation
            - $$r^4 = 288^\\circ$$ rotation
            - $$r^5 = 360^\\circ$$ rotation = identity
        `),
        T.Prose.parse(`
            The group operation table is:
            $$
            \\begin{array}{c|ccccc}
            \\circ & r^0 & r^1 & r^2 & r^3 & r^4 \\\\
            \\hline
            r^0 & r^0 & r^1 & r^2 & r^3 & r^4 \\\\
            r^1 & r^1 & r^2 & r^3 & r^4 & r^0 \\\\
            r^2 & r^2 & r^3 & r^4 & r^0 & r^1 \\\\
            r^3 & r^3 & r^4 & r^0 & r^1 & r^2 \\\\
            r^4 & r^4 & r^0 & r^1 & r^2 & r^3
            \\end{array}
            $$
        `),
        T.Prose.parse(`
            This group is cyclic because:
            1. It is generated by a single element $$r$$
            2. Every element can be written as a power of $$r$$
            3. The group is isomorphic to $$\\mathbb{Z}_5$$ under addition
        `),
    ]),
], 
    T.Prose.parse(`Example: Rotational Symmetries of a Regular Pentagon`)
); 