import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            The generalized quaternion group Q₁₆ is a non-abelian group of order 16.
            It can be presented as:
            Q₁₆ = ⟨a, b | a⁸ = 1, b² = a⁴, b⁻¹ab = a⁻¹⟩
            
            The elements are:
            {1, a, a², a³, a⁴, a⁵, a⁶, a⁷, b, ab, a²b, a³b, a⁴b, a⁵b, a⁶b, a⁷b}
        `),
        T.Prose.parse(`
            The conjugacy classes of Q₁₆ are:
            
            1. {1} (the identity)
            2. {a⁴} (the center)
            3. {a, a⁷} (conjugate pair)
            4. {a², a⁶} (conjugate pair)
            5. {a³, a⁵} (conjugate pair)
            6. {b, a⁴b} (conjugate pair)
            7. {ab, a⁵b} (conjugate pair)
            8. {a²b, a⁶b} (conjugate pair)
            9. {a³b, a⁷b} (conjugate pair)
        `),
        T.Prose.parse(`
            Verification of conjugacy classes:
            
            For the pair {a, a⁷}:
            - b⁻¹ab = a⁻¹ = a⁷
            - (a²)⁻¹a(a²) = a⁻²aa² = a
            - (a³)⁻¹a(a³) = a⁻³aa³ = a
            
            For the pair {b, a⁴b}:
            - a⁻¹ba = a⁻¹a⁻¹b = a⁻²b = a⁶b
            - (a²)⁻¹b(a²) = a⁻²ba² = a⁻²a⁻²b = a⁻⁴b = a⁴b
        `),
        T.Prose.parse(`
            Key observations about Q₁₆ conjugacy classes:
            1. The center Z(Q₁₆) = {1, a⁴} forms two singleton conjugacy classes
            2. The remaining elements form pairs of conjugates
            3. The class equation is: 16 = 1 + 1 + 2 + 2 + 2 + 2 + 2 + 2 + 2
            4. Each non-central element is conjugate to its inverse
            5. The conjugacy classes reflect the group's structure as a central extension
        `),
    ]),
], 
    T.Prose.parse(`Conjugacy Classes of the Generalized Quaternion Group Q₁₆`)
); 