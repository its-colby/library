import * as T from "$book";

export const chapter = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Consider the set of numbers coprime with 8: $$\\{1, 3, 5, 7\\}$$ under multiplication modulo 8.
        `),
        T.Prose.parse(`
            The operation table is:
            $$
            \\begin{array}{c|cccc}
            \\cdot_8 & 1 & 3 & 5 & 7 \\\\
            \\hline
            1 & 1 & 3 & 5 & 7 \\\\
            3 & 3 & 1 & 7 & 5 \\\\
            5 & 5 & 7 & 1 & 3 \\\\
            7 & 7 & 5 & 3 & 1
            \\end{array}
            $$
        `),
        T.Prose.parse(`
            This forms a group of order 4 because:
            - The operation is closed (no elements outside {1,3,5,7} appear in the table)
            - 1 is the identity element
            - Every element has an inverse:
                - 1⁻¹ = 1
                - 3⁻¹ = 3
                - 5⁻¹ = 5
                - 7⁻¹ = 7
        `),
        T.Prose.parse(`
            This is the Klein four-group, which is abelian but not cyclic. To prove it's not cyclic:
            - The order of 1 is 1
            - The order of 3 is 2 ($$3^2 = 9 \\equiv 1 \\mod 8$$)
            - The order of 5 is 2 ($$5^2 = 25 \\equiv 1 \\mod 8$$)
            - The order of 7 is 2 ($$7^2 = 49 \\equiv 1 \\mod 8$$)
            No element has order 4, which would be required for the group to be cyclic.
        `),
        T.Prose.parse(`
            This is the multiplicative group of integers modulo 8, denoted $$(\\mathbb{Z}/8\\mathbb{Z})^\\times$$.
            It consists of all integers between 1 and 7 that are coprime with 8.
        `),
    ]),
], 
    T.Prose.parse(`Example: $$(\\mathbb{Z}/8\\mathbb{Z})^\\times$$ (coprime)`)
); 