import * as T from "$book";

import { chapters as examples } from "./examples";
import { chapters as theorems } from "./theorems";
import { File } from "$directory";
const introduction = [
    T.Prose.parse(`
        Conjugacy classes are fundamental to understanding the structure of groups, particularly non-abelian groups.
        Two elements a and b in a group G are conjugate if there exists g ∈ G such that b = gag⁻¹.
        The conjugacy class of an element a is the set of all elements conjugate to a.
    `),
];

export const chapter = new T.BundledChapters({
    introduction: introduction,
    subchapters: [
        ...examples,
        ...theorems,
    ],
    title: T.Prose.parse(`Conjugacy Classes`),
    is_book: true,
});

export const file = File.from_chapter(chapter);
