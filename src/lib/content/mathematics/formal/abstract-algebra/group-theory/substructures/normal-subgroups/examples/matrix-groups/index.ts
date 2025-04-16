import * as T from "$book";

export const chapter = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Let's examine normal subgroups in various matrix groups:
        `),
        T.Prose.parse(`
            Example 1: General Linear Group
            The special linear group SL(n, F) is normal in GL(n, F).
            
            For GL(2, ℝ):
            - SL(2, ℝ) = {A ∈ GL(2, ℝ) | det(A) = 1} is normal
            - The quotient group GL(2, ℝ)/SL(2, ℝ) ≅ ℝ*
            - The cosets are sets of matrices with equal determinant
        `),
        T.Prose.parse(`
            Example 2: Orthogonal Group
            The special orthogonal group SO(n) is normal in O(n).
            
            For O(2):
            - SO(2) = {A ∈ O(2) | det(A) = 1} is normal
            - The quotient group O(2)/SO(2) ≅ Z₂
            - The cosets are SO(2) and the set of reflection matrices
        `),
        T.Prose.parse(`
            Example 3: Unitary Group
            The special unitary group SU(n) is normal in U(n).
            
            For U(2):
            - SU(2) = {A ∈ U(2) | det(A) = 1} is normal
            - The quotient group U(2)/SU(2) ≅ U(1) (the unit circle)
            - The cosets are sets of unitary matrices with equal determinant
        `),
        T.Prose.parse(`
            Key observations about matrix group normal subgroups:
            1. Special linear groups are normal in general linear groups
            2. Special orthogonal groups are normal in orthogonal groups
            3. Special unitary groups are normal in unitary groups
            4. The determinant function helps identify normal subgroups
            5. Quotient groups often correspond to determinant values
        `),
    ]),
], 
    T.Prose.parse(`Normal Subgroups in Matrix Groups`)
); 