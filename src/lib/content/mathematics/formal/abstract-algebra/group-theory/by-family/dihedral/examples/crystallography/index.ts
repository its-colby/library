import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Dihedral groups play an important role in crystallography, particularly in describing the symmetries of crystal structures.
            Let's explore how dihedral groups appear in crystal systems:
        `),
        T.Prose.parse(`
            Example 1: Two-Dimensional Crystals
            Consider a crystal lattice with hexagonal symmetry:
            
            The point group of a hexagonal lattice contains D₆ as a subgroup.
            This includes:
            - 6 rotations (0°, 60°, 120°, 180°, 240°, 300°)
            - 6 reflections across lines through vertices and edge midpoints
            
            This symmetry is common in materials like graphene and hexagonal boron nitride.
        `),
        T.Prose.parse(`
            Example 2: Three-Dimensional Crystals
            In three dimensions, dihedral groups appear as subgroups of larger crystallographic point groups.
            
            For example, in the orthorhombic crystal system:
            - The point group D₂ appears as a subgroup
            - It describes the symmetry of a rectangular prism
            - This symmetry is found in materials like sulfur and topaz
        `),
        T.Prose.parse(`
            Example 3: Molecular Symmetry
            Many molecules exhibit dihedral symmetry:
            
            - Benzene (C₆H₆) has D₆ symmetry
            - Cyclohexane in its chair conformation has D₃ symmetry
            - Water molecule (H₂O) has D₂ symmetry
        `),
        T.Prose.parse(`
            Key points about dihedral groups in crystallography:
            1. They describe discrete rotational and reflectional symmetries
            2. They are subgroups of larger crystallographic point groups
            3. They help classify crystal systems and space groups
            4. They are fundamental to understanding physical properties of crystals
        `),
    ]),
], 
    T.Prose.parse(`Dihedral Groups in Crystallography`)
); 