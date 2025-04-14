import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Alternating groups appear naturally as symmetry groups of regular polyhedra.
            Let's examine some concrete examples:
        `),
        T.Prose.parse(`
            Example 1: Tetrahedron (A₄)
            The rotational symmetry group of a regular tetrahedron is isomorphic to A₄.
            
            - 12 rotational symmetries:
              * 8 rotations by 120° and 240° about axes through vertices
              * 3 rotations by 180° about axes through midpoints of opposite edges
              * 1 identity rotation
            - These correspond to the 12 even permutations of the 4 vertices
            - The full symmetry group (including reflections) is S₄
        `),
        T.Prose.parse(`
            Example 2: Icosahedron (A₅)
            The rotational symmetry group of a regular icosahedron is isomorphic to A₅.
            
            - 60 rotational symmetries:
              * 24 rotations by 72°, 144°, 216°, and 288° about axes through opposite vertices
              * 20 rotations by 120° and 240° about axes through centers of opposite faces
              * 15 rotations by 180° about axes through midpoints of opposite edges
              * 1 identity rotation
            - These correspond to the 60 even permutations of the 5 inscribed tetrahedra
            - The full symmetry group (including reflections) is S₅
        `),
        T.Prose.parse(`
            Example 3: Cube/Octahedron (S₄)
            While the cube's rotational symmetry group is S₄, it contains A₄ as a subgroup.
            
            - The tetrahedral subgroup A₄ appears when considering:
              * The 4 space diagonals of the cube
              * The 4 pairs of opposite faces
              * The 4 pairs of opposite vertices
            - This shows how A₄ can be realized as a subgroup of larger symmetry groups
        `),
        T.Prose.parse(`
            Key observations about 3D symmetries:
            1. A₄ appears as the rotational symmetry group of the tetrahedron
            2. A₅ appears as the rotational symmetry group of the icosahedron
            3. Alternating groups capture the "pure rotation" symmetries
            4. The full symmetry groups (including reflections) are symmetric groups
            5. These geometric realizations help visualize alternating groups
        `),
    ]),
], 
    T.Prose.parse(`Alternating Groups in 3D Symmetries`)
); 