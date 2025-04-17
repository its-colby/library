// - Krull's theorem , nonzero ring

import * as T from "$book";

const introduction = [
    T.Prose.parse(`
        This chapter presents the definition of a maximal ideal. The definition varies subtly between commutative and non-commutative rings.
    `),
];

import { chapter as posets } from "./posets";
import { chapter as definition } from "./definition";

export const chapter = new T.BundledChapters({
    introduction: introduction,
    subchapters: [posets, definition],
    title: T.Prose.parse(`Definition of a Maximal Ideal`),
});
