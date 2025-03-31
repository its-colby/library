// projective modules
// ----- a part of a free module?
// ----- they’re submodules that are direct summands.
import * as T from "$lib/book";
import { chapter_1 } from "./01";
import { chapter_2 } from "./02";
export const projective_modules = T.BookChapter.from_subchapters({
    subchapters: [
        chapter_1,
        chapter_2,
    ],
    title: T.Prose.parse(`Projective Modules`),
});
