import * as T from "$book";

export const chapter = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Let's examine cosets in various symmetry groups:
        `),
        T.Prose.parse(`
            Example 1: Dihedral Group D₄
            Let H = {r₀, r₂} be the subgroup of rotations by 0° and 180°.
            
            Left cosets:
            - r₀H = {r₀, r₂}
            - r₁H = {r₁, r₃}
            - s₀H = {s₀, s₂}
            - s₁H = {s₁, s₃}
            
            Right cosets:
            - Hr₀ = {r₀, r₂}
            - Hr₁ = {r₁, r₃}
            - Hs₀ = {s₀, s₂}
            - Hs₁ = {s₁, s₃}
            
            Note that gH = Hg for all g, showing H is normal.
        `),
        T.Prose.parse(`
            Example 2: Symmetric Group S₃
            Let H = {e, (1 2)} be the subgroup of S₃.
            
            Left cosets:
            - eH = {e, (1 2)}
            - (1 3)H = {(1 3), (1 2 3)}
            - (2 3)H = {(2 3), (1 3 2)}
            
            Right cosets:
            - He = {e, (1 2)}
            - H(1 3) = {(1 3), (1 3 2)}
            - H(2 3) = {(2 3), (1 2 3)}
            
            Note that (1 3)H ≠ H(1 3), showing H is not normal.
        `),
        T.Prose.parse(`
            Example 3: Alternating Group A₄
            Let H = {e, (1 2)(3 4), (1 3)(2 4), (1 4)(2 3)} be the Klein four-group.
            
            Left cosets:
            - eH = H
            - (1 2 3)H = {(1 2 3), (1 3 4), (1 4 2), (2 4 3)}
            - (1 3 2)H = {(1 3 2), (1 4 3), (1 2 4), (2 3 4)}
            
            Right cosets:
            - He = H
            - H(1 2 3) = {(1 2 3), (1 3 4), (1 4 2), (2 4 3)}
            - H(1 3 2) = {(1 3 2), (1 4 3), (1 2 4), (2 3 4)}
            
            Note that gH = Hg for all g, showing H is normal.
        `),
        T.Prose.parse(`
            Key observations about symmetry group cosets:
            1. Cosets partition the group into equal-sized subsets
            2. The number of cosets equals the index [G:H]
            3. Normal subgroups have identical left and right cosets
            4. Cosets help identify normal subgroups
            5. The set of cosets can form a group (quotient group) when H is normal
        `),
    ]),
], 
    T.Prose.parse(`Cosets in Symmetry Groups`)
); 