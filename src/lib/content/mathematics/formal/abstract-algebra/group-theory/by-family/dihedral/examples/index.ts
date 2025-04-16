import * as T from "$book";

import { chapter as n_gon_symmetries } from "./n-gon-symmetries";
import { chapter as direct_products } from "./direct-products";
import { chapter as edge_cases } from "./edge-cases";
import { chapter as crystallography } from "./crystallography";

const introduction = [
    T.Prose.parse(`
        Dihedral groups are fundamental in understanding symmetries of regular polygons and appear in various mathematical and physical contexts.
        Here we explore key examples and applications of dihedral groups, from basic geometric symmetries to their appearance in crystallography.
    `),
];

export const chapter = T.BookChapter.from_subchapters({
    introduction: introduction,
    subchapters: [
        n_gon_symmetries,
        direct_products,
        edge_cases,
        crystallography,
    ],
    title: T.Prose.parse(`Examples of Dihedral Groups`)
}); 