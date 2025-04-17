import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Consider the set $$\\{1, 2, 3, 4, 5, 6, 7\\}$$ under multiplication modulo 8.
        `),
        T.Prose.parse(`
            The operation table is:
            $$
            \\begin{array}{c|ccccccc}
            \\cdot_8 & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\
            \\hline
            1 & 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\
            2 & 2 & 4 & 6 & 0 & 2 & 4 & 6 \\\\
            3 & 3 & 6 & 1 & 4 & 7 & 2 & 5 \\\\
            4 & 4 & 0 & 4 & 0 & 4 & 0 & 4 \\\\
            5 & 5 & 2 & 7 & 4 & 1 & 6 & 3 \\\\
            6 & 6 & 4 & 2 & 0 & 6 & 4 & 2 \\\\
            7 & 7 & 6 & 5 & 4 & 3 & 2 & 1
            \\end{array}
            $$
        `),
        T.Prose.parse(`
            This is not a group because:
            - The operation is not closed (we get 0 in the table)
            - Elements 2, 4, and 6 have no inverses
            - Only elements coprime with 8 (1, 3, 5, 7) have inverses
        `),
    ]),
], 
    T.Prose.parse(`Non-Example: $$(\\mathbb{Z}/8\\mathbb{Z})^\\times$$ (all)`)
); 