import * as T from "$book";

const introduction = [
    T.Prose.parse(`
        TBD
    `),
];

import { chapter as chapter_1 } from "./1-examples";
import { chapter as chapter_2 } from "./2-weak-nullstellensatz";

export const chapter = new T.BundledChapters({
    introduction: introduction,
    subchapters: [
        chapter_1,
        chapter_2,
    ],
    title: T.Prose.parse(`Examples in $$\\mathbb{C}[x]$$`)
});