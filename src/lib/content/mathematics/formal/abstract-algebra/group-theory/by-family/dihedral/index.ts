import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";

export const chapter = T.BookChapter.book_from_exposition([
    T.Prose.parse(`
        Dihedral groups.
    `),
], T.Prose.parse(`Dihedral Groups`));

export const page = Webpage.from_chapter(chapter);



// symmetries of n-gons (ex triangle, ex square, non-ex rotations)
// direct product of cyclic groups (ex z_3 x z_2 = d_3)
// edge cases (ex d_1 = z_2)