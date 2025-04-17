import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Let's examine cosets in some simple groups and edge cases:
        `),
        T.Prose.parse(`
            Case 1: Trivial Subgroup
            Let G be any group and H = {e} be the trivial subgroup.
            Then for any g ∈ G, the coset gH = {g}.
            All cosets are singletons, and there are |G| distinct cosets.
        `),
        T.Prose.parse(`
            Case 2: Whole Group
            Let G be any group and H = G.
            Then there is only one coset: gH = G for any g ∈ G.
            This shows that the index [G:H] = 1.
        `),
        T.Prose.parse(`
            Case 3: Abelian Groups
            In abelian groups, left and right cosets coincide.
            
            Example in Z₆:
            Let H = {0, 3} be the subgroup of Z₆.
            The cosets are:
            - 0 + H = {0, 3}
            - 1 + H = {1, 4}
            - 2 + H = {2, 5}
            
            Note that 3 + H = {3, 0} = 0 + H, showing coset equality.
        `),
        T.Prose.parse(`
            Case 4: Normal Subgroups
            A subgroup H is normal if gH = Hg for all g ∈ G.
            
            Example in D₄:
            Let H = {r₀, r₂} be the subgroup of rotations by 0° and 180°.
            Then for any g ∈ D₄:
            - If g is a rotation, gH = Hg = {gr₀, gr₂}
            - If g is a reflection, gH = Hg = {gs₀, gs₂}
            
            This shows H is normal in D₄.
        `),
    ]),
], 
    T.Prose.parse(`Edge Cases of Cosets`)
); 