import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Not all symmetry groups of polygons are dihedral groups. Let's examine some non-examples:
        `),
        T.Prose.parse(`
            Example 1: Rotations Only
            Consider a regular pentagon with only rotational symmetries (no reflections).
            This forms a cyclic group C₅, not a dihedral group D₅.
            The group has 5 elements: rotations by 0°, 72°, 144°, 216°, and 288°.
            This is not a dihedral group because it lacks reflections.
        `),
        T.Prose.parse(`
            Example 2: Irregular Polygon
            Consider an irregular pentagon with no rotational or reflectional symmetry.
            The only symmetry is the identity transformation.
            This forms the trivial group {e}, which is not a dihedral group.
        `),
        T.Prose.parse(`
            Example 3: Rectangle (Non-Regular)
            A rectangle has only 4 symmetries:
            - Identity
            - Rotation by 180°
            - Reflection across the vertical line
            - Reflection across the horizontal line
            
            This forms the Klein four-group V₄, which is abelian.
            Since Dₙ is non-abelian for n ≥ 3, this cannot be a dihedral group.
        `),
        T.Prose.parse(`
            Key differences from dihedral groups:
            1. Dihedral groups must include both rotations and reflections
            2. Dihedral groups are non-abelian for n ≥ 3
            3. Dihedral groups have order 2n for a regular n-gon
            4. Dihedral groups have a specific presentation: ⟨r, s | rⁿ = s² = e, srs = r⁻¹⟩
        `),
    ]),
], 
    T.Prose.parse(`Non-Examples of Dihedral Groups`)
); 