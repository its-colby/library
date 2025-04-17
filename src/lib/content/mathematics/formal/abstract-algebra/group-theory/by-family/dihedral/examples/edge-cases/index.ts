import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Dihedral groups have some interesting edge cases for small values of n.
            Let's examine these special cases:
        `),
        T.Prose.parse(`
            Case 1: D₁ (n=1)
            The dihedral group D₁ represents the symmetries of a line segment.
            It has only 2 elements:
            - r₀: Identity rotation (0°)
            - s₀: Reflection across the center
            
            This group is isomorphic to Z₂:
            D₁ ≅ Z₂ = {0,1} under addition modulo 2
        `),
        T.Prose.parse(`
            Case 2: D₂ (n=2)
            The dihedral group D₂ represents the symmetries of a rectangle.
            It has 4 elements:
            - r₀: Identity rotation (0°)
            - r₁: Rotation by 180°
            - s₀: Reflection across the vertical line
            - s₁: Reflection across the horizontal line
            
            This group is isomorphic to the Klein four-group V₄:
            D₂ ≅ V₄ = Z₂ × Z₂
        `),
        T.Prose.parse(`
            Case 3: D₀ (n=0)
            Some authors define D₀ as the trivial group {e}.
            This represents the symmetries of a point.
            However, this definition is not universal and some authors start with D₁.
        `),
        T.Prose.parse(`
            Key observations about edge cases:
            1. D₁ and D₂ are abelian, unlike Dₙ for n ≥ 3
            2. D₁ is the smallest non-trivial dihedral group
            3. D₂ is the only dihedral group that is isomorphic to a direct product of cyclic groups
            4. For n ≥ 3, Dₙ becomes non-abelian and more complex
        `),
    ]),
], 
    T.Prose.parse(`Edge Cases of Dihedral Groups`)
); 