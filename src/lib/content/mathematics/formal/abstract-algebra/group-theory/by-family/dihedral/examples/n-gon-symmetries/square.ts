import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            The dihedral group D₄ represents all symmetries of a square.
            This group has 8 elements: 4 rotations and 4 reflections.
        `),
        T.Prose.parse(`
            Let's enumerate the elements:
            
            Rotations:
            - r₀: Identity rotation (0°)
            - r₁: Rotation by 90°
            - r₂: Rotation by 180°
            - r₃: Rotation by 270°
            
            Reflections:
            - s₀: Reflection across the vertical line
            - s₁: Reflection across the horizontal line
            - s₂: Reflection across the main diagonal
            - s₃: Reflection across the anti-diagonal
        `),
        T.Prose.parse(`
            The group operation table for D₄ is:
            $$
            \\begin{array}{c|cccccccc}
            \\circ & r_0 & r_1 & r_2 & r_3 & s_0 & s_1 & s_2 & s_3 \\\\
            \\hline
            r_0 & r_0 & r_1 & r_2 & r_3 & s_0 & s_1 & s_2 & s_3 \\\\
            r_1 & r_1 & r_2 & r_3 & r_0 & s_1 & s_2 & s_3 & s_0 \\\\
            r_2 & r_2 & r_3 & r_0 & r_1 & s_2 & s_3 & s_0 & s_1 \\\\
            r_3 & r_3 & r_0 & r_1 & r_2 & s_3 & s_0 & s_1 & s_2 \\\\
            s_0 & s_0 & s_3 & s_2 & s_1 & r_0 & r_2 & r_1 & r_3 \\\\
            s_1 & s_1 & s_0 & s_3 & s_2 & r_2 & r_0 & r_3 & r_1 \\\\
            s_2 & s_2 & s_1 & s_0 & s_3 & r_3 & r_1 & r_0 & r_2 \\\\
            s_3 & s_3 & s_2 & s_1 & s_0 & r_1 & r_3 & r_2 & r_0
            \\end{array}
            $$
        `),
        T.Prose.parse(`
            Key properties of D₄:
            1. It is non-abelian (e.g., r₁ ∘ s₀ ≠ s₀ ∘ r₁)
            2. The rotations form a cyclic subgroup of order 4
            3. Each reflection has order 2
            4. The group is generated by any rotation and any reflection
            5. The center of D₄ is {r₀, r₂}
        `),
    ]),
], 
    T.Prose.parse(`Example: D₄ - Symmetries of a Square`)
); 