import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Let's examine conjugacy classes in some simple groups and edge cases:
        `),
        T.Prose.parse(`
            Case 1: Abelian Groups
            In any abelian group G, the conjugacy class of any element a is just {a}.
            This is because for any g ∈ G:
            gag⁻¹ = gg⁻¹a = a
            
            Examples:
            - In Z₅, each element forms its own conjugacy class
            - In Z₄ × Z₂, each element forms its own conjugacy class
        `),
        T.Prose.parse(`
            Case 2: Trivial Group
            The trivial group {e} has only one conjugacy class: {e}.
            This is the smallest possible conjugacy class partition.
        `),
        T.Prose.parse(`
            Case 3: Center of a Group
            The center Z(G) of a group G consists of all elements that commute with every element of G.
            Each element in the center forms its own conjugacy class.
            
            For example, in D₄:
            - The center is {r₀, r₂} (identity and 180° rotation)
            - Both elements form singleton conjugacy classes
        `),
        T.Prose.parse(`
            Case 4: Symmetric Group S₃
            S₃ has three conjugacy classes:
            1. {e} (the identity)
            2. {(1 2), (1 3), (2 3)} (all transpositions)
            3. {(1 2 3), (1 3 2)} (all 3-cycles)
            
            This shows how conjugacy classes can have different sizes.
        `),
    ]),
], 
    T.Prose.parse(`Edge Cases of Conjugacy Classes`)
); 