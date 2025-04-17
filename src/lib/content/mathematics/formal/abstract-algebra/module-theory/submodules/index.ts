// submodules
// ----- essentiallly an ideal (closed under scalar = absorption property, closed under addition as well)

import * as T from "$book";
import { chapter_1 } from "./01";
import { chapter_2 } from "./02";
export const submodules = new T.BundledChapters({
    subchapters: [
        chapter_1,
        chapter_2,
    ],
    title: T.Prose.parse(`Submodules`),
});
