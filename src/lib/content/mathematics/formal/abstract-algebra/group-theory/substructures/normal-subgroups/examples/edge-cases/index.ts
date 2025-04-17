import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Let's examine normal subgroups in some simple groups and edge cases:
        `),
        T.Prose.parse(`
            Case 1: Trivial Subgroups
            In any group G:
            - The trivial subgroup {e} is always normal
            - The whole group G is always normal in itself
            These are called the trivial normal subgroups.
        `),
        T.Prose.parse(`
            Case 2: Abelian Groups
            In abelian groups, every subgroup is normal.
            
            Example in Z₆:
            - {0} is normal
            - {0, 3} is normal
            - {0, 2, 4} is normal
            - Z₆ itself is normal
            
            This is because in abelian groups, gH = Hg for any subgroup H and any g ∈ G.
        `),
        T.Prose.parse(`
            Case 3: Center of a Group
            The center Z(G) of a group G is always a normal subgroup.
            
            Example in D₄:
            - Z(D₄) = {r₀, r₂} (identity and 180° rotation)
            - This subgroup is normal because it commutes with all elements
            - The quotient group D₄/Z(D₄) is isomorphic to the Klein four-group
        `),
        T.Prose.parse(`
            Case 4: Index 2 Subgroups
            Any subgroup of index 2 is normal.
            
            Example in S₃:
            - A₃ = {e, (1 2 3), (1 3 2)} has index 2
            - It is normal because for any σ ∈ S₃:
              * If σ ∈ A₃, then σA₃ = A₃ = A₃σ
              * If σ ∉ A₃, then σA₃ = S₃ \ A₃ = A₃σ
        `),
    ]),
], 
    T.Prose.parse(`Edge Cases of Normal Subgroups`)
); 