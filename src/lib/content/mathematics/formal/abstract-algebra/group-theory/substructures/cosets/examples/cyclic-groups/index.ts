import * as T from "$book";

export const chapter = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Let's examine cosets in various cyclic groups:
        `),
        T.Prose.parse(`
            Example 1: Additive Group Z₈
            Let H = {0, 4} be the subgroup of Z₈.
            
            The cosets are:
            - 0 + H = {0, 4}
            - 1 + H = {1, 5}
            - 2 + H = {2, 6}
            - 3 + H = {3, 7}
            
            Since Z₈ is abelian, left and right cosets coincide.
            The index [Z₈:H] = 4, and each coset has size 2.
        `),
        T.Prose.parse(`
            Example 2: Multiplicative Group U(15)
            U(15) = {1, 2, 4, 7, 8, 11, 13, 14} under multiplication modulo 15.
            Let H = {1, 4} be the subgroup.
            
            The cosets are:
            - 1H = {1, 4}
            - 2H = {2, 8}
            - 7H = {7, 13}
            - 11H = {11, 14}
            
            Since U(15) is abelian, left and right cosets coincide.
            The index [U(15):H] = 4, and each coset has size 2.
        `),
        T.Prose.parse(`
            Example 3: Infinite Cyclic Group Z
            Let H = 3Z = {..., -6, -3, 0, 3, 6, ...} be the subgroup of Z.
            
            The cosets are:
            - 0 + H = {..., -6, -3, 0, 3, 6, ...}
            - 1 + H = {..., -5, -2, 1, 4, 7, ...}
            - 2 + H = {..., -4, -1, 2, 5, 8, ...}
            
            Since Z is abelian, left and right cosets coincide.
            The index [Z:3Z] = 3, and each coset is infinite.
        `),
        T.Prose.parse(`
            Key observations about cyclic group cosets:
            1. All subgroups of cyclic groups are normal
            2. Cosets in cyclic groups are arithmetic progressions
            3. The number of cosets equals the index of the subgroup
            4. In finite cyclic groups, the size of each coset divides the group order
            5. In infinite cyclic groups, cosets are translates of the subgroup
        `),
    ]),
], 
    T.Prose.parse(`Cosets in Cyclic Groups`)
); 