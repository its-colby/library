import * as T from "$book";

export const chapter = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Consider the subset $$\\{1, 2, 4\\}$$ of $$\\mathbb{Z}_7$$ under multiplication modulo 7.
        `),
        T.Prose.parse(`
            The operation table is:
            $$
            \\begin{array}{c|ccc}
            \\cdot_7 & 1 & 2 & 4 \\\\
            \\hline
            1 & 1 & 2 & 4 \\\\
            2 & 2 & 4 & 1 \\\\
            4 & 4 & 1 & 2
            \\end{array}
            $$
        `),
        T.Prose.parse(`
            This forms a cyclic group of order 3 because:
            - The operation is closed (no elements outside {1,2,4} appear in the table)
            - 1 is the identity element
            - Every element has an inverse:
                - 1⁻¹ = 1
                - 2⁻¹ = 4
                - 4⁻¹ = 2
            - The group is cyclic because 2 is a generator:
                - 2¹ = 2
                - 2² = 4
                - 2³ = 1
        `),
        T.Prose.parse(`
            This is a proper subgroup of the multiplicative group of integers modulo 7, which consists of all non-zero elements $$\\{1, 2, 3, 4, 5, 6\\}$$.
        `),
    ]),
], 
    T.Prose.parse(`Example: $$(\\mathbb{Z}/7\\mathbb{Z})^\\times$$ (subgroup)`)
); 