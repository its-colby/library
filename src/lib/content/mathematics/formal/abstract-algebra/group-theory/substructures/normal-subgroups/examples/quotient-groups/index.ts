import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Let's examine how normal subgroups give rise to quotient groups:
        `),
        T.Prose.parse(`
            Example 1: Cyclic Groups
            Let G = Z₈ and H = {0, 4}.
            
            - H is normal (since Z₈ is abelian)
            - The quotient group G/H has elements:
              * H = {0, 4}
              * 1 + H = {1, 5}
              * 2 + H = {2, 6}
              * 3 + H = {3, 7}
            - G/H ≅ Z₄ under addition of cosets
        `),
        T.Prose.parse(`
            Example 2: Dihedral Groups
            Let G = D₄ and H = {r₀, r₂}.
            
            - H is normal (the center of D₄)
            - The quotient group G/H has elements:
              * H = {r₀, r₂}
              * r₁H = {r₁, r₃}
              * s₀H = {s₀, s₂}
              * s₁H = {s₁, s₃}
            - G/H ≅ Z₂ × Z₂ (Klein four-group)
        `),
        T.Prose.parse(`
            Example 3: Symmetric Groups
            Let G = S₄ and H = A₄.
            
            - H is normal (the alternating group)
            - The quotient group G/H has elements:
              * H = A₄ (even permutations)
              * (1 2)H = S₄ \ A₄ (odd permutations)
            - G/H ≅ Z₂
        `),
        T.Prose.parse(`
            Key observations about quotient groups:
            1. The order of G/H is [G:H]
            2. If G is abelian, G/H is abelian
            3. If G is cyclic, G/H is cyclic
            4. The First Isomorphism Theorem connects quotient groups to homomorphisms
            5. Quotient groups preserve important group properties
        `),
    ]),
], 
    T.Prose.parse(`Quotient Groups from Normal Subgroups`)
); 