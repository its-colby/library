import * as T from "$book";
import { chapter_1 } from "./01";
export const torsion_modules = T.BookChapter.from_subchapters({
    subchapters: [
        chapter_1,
    ],
    title: T.Prose.parse(`Torsion Modules`),
});
