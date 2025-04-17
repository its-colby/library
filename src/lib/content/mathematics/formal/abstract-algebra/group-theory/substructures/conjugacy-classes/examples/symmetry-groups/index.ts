import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Let's examine conjugacy classes in various symmetry groups:
        `),
        T.Prose.parse(`
            Example 1: Dihedral Group D₄
            The conjugacy classes of D₄ (symmetries of a square) are:
            
            1. {r₀} (identity)
            2. {r₂} (180° rotation)
            3. {r₁, r₃} (90° and 270° rotations)
            4. {s₀, s₁} (vertical and horizontal reflections)
            5. {s₂, s₃} (diagonal reflections)
            
            The class equation is: 8 = 1 + 1 + 2 + 2 + 2
        `),
        T.Prose.parse(`
            Example 2: Symmetric Group S₄
            The conjugacy classes of S₄ correspond to cycle types:
            
            1. {e} (identity)
            2. {(1 2), (1 3), (1 4), (2 3), (2 4), (3 4)} (transpositions)
            3. {(1 2 3), (1 2 4), (1 3 2), (1 3 4), (1 4 2), (1 4 3), (2 3 4), (2 4 3)} (3-cycles)
            4. {(1 2)(3 4), (1 3)(2 4), (1 4)(2 3)} (double transpositions)
            5. {(1 2 3 4), (1 2 4 3), (1 3 2 4), (1 3 4 2), (1 4 2 3), (1 4 3 2)} (4-cycles)
            
            The class equation is: 24 = 1 + 6 + 8 + 3 + 6
        `),
        T.Prose.parse(`
            Example 3: Alternating Group A₄
            The conjugacy classes of A₄ are:
            
            1. {e} (identity)
            2. {(1 2 3), (1 3 2), (1 2 4), (1 4 2), (1 3 4), (1 4 3), (2 3 4), (2 4 3)} (3-cycles)
            3. {(1 2)(3 4), (1 3)(2 4), (1 4)(2 3)} (double transpositions)
            
            The class equation is: 12 = 1 + 8 + 3
        `),
        T.Prose.parse(`
            Key observations about symmetry group conjugacy classes:
            1. In Dₙ, rotations of the same angle form conjugacy classes
            2. In Sₙ, conjugacy classes correspond to cycle types
            3. In Aₙ, some conjugacy classes of Sₙ may split
            4. The size of a conjugacy class divides the order of the group
            5. Conjugacy classes help understand the group's structure and normal subgroups
        `),
    ]),
], 
    T.Prose.parse(`Conjugacy Classes in Symmetry Groups`)
); 