import * as T from "$lib/book";
import { chapter_2 } from "./02";
import { chapter_3 } from "./03";
import { chapter_1 } from "./01";
export const free_modules = T.BookChapter.from_subchapters({
    subchapters: [
        chapter_1,
        chapter_2,
        chapter_3,  
    ],
    title: T.Prose.parse(`Free Modules`),
});


// free
// For a ring R, a module P is free if and only if it is isomorphic to R^n for some n (where n could be infinite). This is actually the definition of a free module.
// If a module over a ring is free, then its rank must be constant at all prime ideals