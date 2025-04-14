import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Let's examine cosets in various matrix groups:
        `),
        T.Prose.parse(`
            Example 1: General Linear Group GL(2, ℝ)
            Let H = SL(2, ℝ) be the special linear group of 2×2 matrices with determinant 1.
            
            The cosets are:
            - For any A ∈ GL(2, ℝ), the coset AH consists of all matrices with determinant equal to det(A).
            - For example, if A = [2 0; 0 1], then AH consists of all matrices with determinant 2.
            - The set of cosets is in bijection with ℝ* (non-zero real numbers).
        `),
        T.Prose.parse(`
            Example 2: Orthogonal Group O(2)
            Let H = SO(2) be the special orthogonal group of 2×2 rotation matrices.
            
            The cosets are:
            - SO(2) = {rotation matrices}
            - A·SO(2) where A is any reflection matrix
            
            For example, if A = [1 0; 0 -1], then A·SO(2) consists of all reflection matrices.
            The index [O(2):SO(2)] = 2.
        `),
        T.Prose.parse(`
            Example 3: Unitary Group U(2)
            Let H = SU(2) be the special unitary group of 2×2 unitary matrices with determinant 1.
            
            The cosets are:
            - SU(2) = {unitary matrices with det = 1}
            - For any U ∈ U(2), the coset U·SU(2) consists of all unitary matrices with determinant equal to det(U).
            - The set of cosets is in bijection with the unit circle in ℂ.
        `),
        T.Prose.parse(`
            Key observations about matrix group cosets:
            1. Cosets often correspond to geometric transformations
            2. The determinant function can be used to identify cosets
            3. Special linear groups are normal in general linear groups
            4. Special orthogonal groups are normal in orthogonal groups
            5. The set of cosets often forms a group (quotient group)
        `),
    ]),
], 
    T.Prose.parse(`Cosets in Matrix Groups`)
); 