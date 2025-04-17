import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Consider the multiplicative group $$(\\{1, 2, 3, 4\\}, \\cdot_5)$$ where $$\\cdot_5$$ is multiplication modulo 5.
        `),
        T.Prose.parse(`
            The group operation table is:
            $$
            \\begin{array}{c|cccc}
            \\cdot_5 & 1 & 2 & 3 & 4 \\\\
            \\hline
            1 & 1 & 2 & 3 & 4 \\\\
            2 & 2 & 4 & 1 & 3 \\\\
            3 & 3 & 1 & 4 & 2 \\\\
            4 & 4 & 3 & 2 & 1
            \\end{array}
            $$
        `),
        T.Prose.parse(`
            To prove this group is cyclic, we show that 2 is a generator:
        `),
        T.Prose.parse(`
            - $$2^1 = 2 \\mod 5$$
            - $$2^2 = 4 \\mod 5$$
            - $$2^3 = 8 \\equiv 3 \\mod 5$$
            - $$2^4 = 16 \\equiv 1 \\mod 5$$
        `),
        T.Prose.parse(`
            We can also verify that 3 is another generator:
            - $$3^1 = 3 \\mod 5$$
            - $$3^2 = 9 \\equiv 4 \\mod 5$$
            - $$3^3 = 27 \\equiv 2 \\mod 5$$
            - $$3^4 = 81 \\equiv 1 \\mod 5$$
        `),
        T.Prose.parse(`
            Since both 2 and 3 generate all elements of the group, this group is cyclic.
        `),
    ]),
], 
    T.Prose.parse(`Example: $$\\mathbb{Z}/5\\mathbb{Z}^\\times$$`)
); 