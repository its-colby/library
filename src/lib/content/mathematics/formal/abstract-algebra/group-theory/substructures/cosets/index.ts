import * as T from "$book";
import { File } from "$directory";

import { chapter as edge_cases } from "./examples/edge-cases";
import { chapter as symmetry_groups } from "./examples/symmetry-groups";
import { chapter as cyclic_groups } from "./examples/cyclic-groups";
import { chapter as matrix_groups } from "./examples/matrix-groups";

const introduction = [
    T.Prose.parse(`
        Cosets are fundamental to understanding the structure of groups and their subgroups.
        Given a group G and a subgroup H, the left coset of H with respect to an element g ∈ G is gH = {gh | h ∈ H}.
        Similarly, the right coset is Hg = {hg | h ∈ H}.
        In abelian groups, left and right cosets coincide.
    `),
];

export const chapter = new T.BundledChapters({
    introduction: introduction,
    subchapters: [
        edge_cases,
        symmetry_groups,
        cyclic_groups,
        matrix_groups,
    ],
    title: T.Prose.parse(`Cosets`),
    is_book: true,
});

export const file = File.from_chapter(chapter);

// cyclic, dihedral, etc