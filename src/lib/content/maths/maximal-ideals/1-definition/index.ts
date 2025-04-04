// - Krull's theorem , nonzero ring

import * as T from "$lib/book";

const introduction = [
    T.Prose.parse(`
        A maximal ideal is a special type of ideal in a ring.
    `),
];

import { chapter as c1 } from "./1-commutative-rings";
import { chapter as c2 } from "./2-z-mod-6";
import { chapter as c3 } from "./3-z-mod-5";
import { chapter as c4 } from "./4-non-commutative-rings";

export const chapter = T.BookChapter.from_subchapters({
    introduction: introduction,
    subchapters: [c1, c2, c3, c4],
    title: T.Prose.parse(`Definition of a Maximal Ideal`),
});
