import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Let's examine normal subgroups in various symmetry groups:
        `),
        T.Prose.parse(`
            Example 1: Dihedral Groups
            In Dₙ, the subgroup of rotations Rₙ is always normal.
            
            For D₄:
            - R₄ = {r₀, r₁, r₂, r₃} is normal
            - The quotient group D₄/R₄ ≅ Z₂
            - The cosets are R₄ and sR₄ (where s is any reflection)
            
            For D₅:
            - R₅ = {r₀, r₁, r₂, r₃, r₄} is normal
            - The quotient group D₅/R₅ ≅ Z₂
            - The cosets are R₅ and sR₅
        `),
        T.Prose.parse(`
            Example 2: Symmetric Groups
            The alternating group Aₙ is always normal in Sₙ.
            
            For S₃:
            - A₃ = {e, (1 2 3), (1 3 2)} is normal
            - The quotient group S₃/A₃ ≅ Z₂
            - The cosets are A₃ and (1 2)A₃
            
            For S₄:
            - A₄ is normal
            - The quotient group S₄/A₄ ≅ Z₂
            - The cosets are A₄ and (1 2)A₄
        `),
        T.Prose.parse(`
            Example 3: Alternating Groups
            The Klein four-group is normal in A₄.
            
            Let V = {e, (1 2)(3 4), (1 3)(2 4), (1 4)(2 3)}.
            - V is normal in A₄
            - The quotient group A₄/V ≅ Z₃
            - The cosets are V, (1 2 3)V, and (1 3 2)V
        `),
        T.Prose.parse(`
            Key observations about symmetry group normal subgroups:
            1. Rotation subgroups are normal in dihedral groups
            2. Alternating groups are normal in symmetric groups
            3. The quotient groups often have simple structure (e.g., Z₂)
            4. Normal subgroups preserve symmetry properties
            5. The existence of normal subgroups helps classify groups
        `),
    ]),
], 
    T.Prose.parse(`Normal Subgroups in Symmetry Groups`)
); 