import * as T from "$book";
import { File } from "$directory";

import { chapters as examples } from "./examples";
import { chapters as theorems } from "./theorems";

const introduction = [
    T.Prose.parse(`
        Normal subgroups are fundamental to understanding group structure and constructing quotient groups.
        A subgroup H of a group G is normal if gH = Hg for all g ∈ G, or equivalently, if gHg⁻¹ = H for all g ∈ G.
        Normal subgroups allow us to form quotient groups G/H, which preserve important group properties.
    `),
];

export const chapter = T.BookChapter.new_document({
    introduction: introduction,
    chapters: [
        ...examples,
        ...theorems,
    ],
    title: T.Prose.parse(`Normal Subgroups`)
});

export const file = File.from_chapter(chapter);