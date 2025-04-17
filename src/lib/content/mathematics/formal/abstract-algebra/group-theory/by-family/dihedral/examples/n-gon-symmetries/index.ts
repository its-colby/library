import * as T from "$book";

import { chapter as triangle } from "./triangle";
import { chapter as square } from "./square";
import { chapter as non_examples } from "./non-examples";

const introduction = [
    T.Prose.parse(`
        The dihedral group Dₙ is the symmetry group of a regular n-gon, consisting of n rotations and n reflections.
        Here we explore concrete examples of dihedral groups through the symmetries of regular polygons, particularly focusing on the triangle (D₃) and square (D₄).
        We also examine non-examples to understand what structures do not form dihedral groups.
    `),
];

export const chapter = new T.BundledChapters({
    introduction: introduction,
    subchapters: [
        triangle,
        square,
        non_examples,
    ],
    title: T.Prose.parse(`Symmetries of Regular n-gons`)
}); 