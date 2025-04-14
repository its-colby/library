import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";

import { chapter as basic_properties } from "./examples/basic-properties";
import { chapter as three_d_symmetries } from "./examples/three-d-symmetries";
import { chapter as permutation_representations } from "./examples/permutation-representations";
import { chapter as simplicity } from "./examples/simplicity";

const introduction = [
    T.Prose.parse(`
        Alternating groups Aₙ are fundamental finite groups that arise as the group of even permutations of n elements.
        They are the kernel of the sign homomorphism from the symmetric group Sₙ to {±1}.
        Alternating groups play a crucial role in group theory, particularly in the classification of finite simple groups.
    `),
];

export const chapter = T.BookChapter.new_document({
    introduction: introduction,
    chapters: [
        basic_properties,
        three_d_symmetries,
        permutation_representations,
        simplicity,
    ],
    title: T.Prose.parse(`Alternating Groups`)
});

export const page = Webpage.from_chapter(chapter);

// even permutations
//  but it is the rotational symmetry group of the icosahedron/dodecahedron in 3D.