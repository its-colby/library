import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Alternating groups have natural permutation representations that help understand their structure.
            Let's examine some important examples:
        `),
        T.Prose.parse(`
            Example 1: A₄ as Permutations
            A₄ can be represented as even permutations of 4 elements:
            
            - The identity: e
            - 3-cycles: (1 2 3), (1 3 2), (1 2 4), (1 4 2), (1 3 4), (1 4 3), (2 3 4), (2 4 3)
            - Double transpositions: (1 2)(3 4), (1 3)(2 4), (1 4)(2 3)
            - Total: 1 + 8 + 3 = 12 elements
        `),
        T.Prose.parse(`
            Example 2: A₅ as Permutations
            A₅ can be represented as even permutations of 5 elements:
            
            - The identity: e
            - 3-cycles: 20 elements like (1 2 3), (1 2 4), etc.
            - 5-cycles: 24 elements like (1 2 3 4 5), (1 2 3 5 4), etc.
            - Double transpositions: 15 elements like (1 2)(3 4), etc.
            - Total: 1 + 20 + 24 + 15 = 60 elements
        `),
        T.Prose.parse(`
            Example 3: Action on Cosets
            Aₙ has a natural action on the cosets of its subgroups:
            
            For A₄:
            - Acting on the cosets of the Klein four-group V
            - V = {e, (1 2)(3 4), (1 3)(2 4), (1 4)(2 3)}
            - The action gives a homomorphism A₄ → S₃
            - This shows A₄ is not simple
        `),
        T.Prose.parse(`
            Key observations about permutation representations:
            1. Alternating groups are defined by their permutation action
            2. The number of 3-cycles grows rapidly with n
            3. For n ≥ 5, all non-trivial conjugacy classes are large
            4. The action on cosets reveals important subgroup structure
            5. These representations help prove simplicity for n ≥ 5
        `),
    ]),
], 
    T.Prose.parse(`Permutation Representations of Alternating Groups`)
); 