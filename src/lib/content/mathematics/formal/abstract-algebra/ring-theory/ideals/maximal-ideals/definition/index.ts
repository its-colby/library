// - Krull's theorem , nonzero ring

import * as T from "$lib/book";

const introduction = [
    T.Prose.parse(`
        This chapter presents the definition of a maximal ideal. The definition varies subtly between commutative and non-commutative rings.
    `),
];

import { chapter as posets } from "./posets";
import { chapter as definition } from "./definition";

export const chapter = T.BookChapter.from_subchapters({
    introduction: introduction,
    subchapters: [posets, definition],
    title: T.Prose.parse(`Definition of a Maximal Ideal`),
});
