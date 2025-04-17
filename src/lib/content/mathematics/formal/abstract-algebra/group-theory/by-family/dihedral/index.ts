import * as T from "$book";
import { File } from "$directory";

export const chapter = T.Exposition.as_book([
    T.Prose.parse(`
        Dihedral groups.
    `),
], T.Prose.parse(`Dihedral Groups`));

export const file = File.from_chapter(chapter);



// symmetries of n-gons (ex triangle, ex square, non-ex rotations)
// direct product of cyclic groups (ex z_3 x z_2 = d_3)
// edge cases (ex d_1 = z_2)