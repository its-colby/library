import * as T from "$book";

export const chapter = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Characteristic subgroups are special normal subgroups that are invariant under all automorphisms.
            Every characteristic subgroup is normal, but not every normal subgroup is characteristic.
        `),
        T.Prose.parse(`
            Example 1: Center of a Group
            The center Z(G) is always a characteristic subgroup.
            
            In Q₈ (quaternion group):
            - Z(Q₈) = {1, -1} is characteristic
            - Any automorphism must preserve the center
            - The center is also normal
        `),
        T.Prose.parse(`
            Example 2: Commutator Subgroup
            The commutator subgroup [G,G] is always characteristic.
            
            In S₄:
            - [S₄,S₄] = A₄ is characteristic
            - Any automorphism must preserve the commutator subgroup
            - The commutator subgroup is also normal
        `),
        T.Prose.parse(`
            Example 3: Sylow Subgroups
            In some groups, Sylow subgroups can be characteristic.
            
            In D₄:
            - The subgroup {r₀, r₂} is characteristic
            - It is the unique Sylow 2-subgroup
            - It is preserved by all automorphisms
        `),
        T.Prose.parse(`
            Key observations about characteristic subgroups:
            1. Every characteristic subgroup is normal
            2. The center is always characteristic
            3. The commutator subgroup is always characteristic
            4. Characteristic subgroups are preserved by all automorphisms
            5. The property of being characteristic is transitive
        `),
    ]),
], 
    T.Prose.parse(`Characteristic Subgroups`)
); 