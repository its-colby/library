import * as T from "$book";

import { chapter as order_1 } from "./order-1";
import { chapter as order_2 } from "./order-2";

const introduction = [
    T.Prose.parse(`
        We will now investigate edge cases of cyclic groups, including the smallest possible groups, groups of prime order, and infinite cyclic groups.
        These examples demonstrate fundamental properties of cyclic groups in various extreme cases.
    `),
];

export const chapter = new T.BundledChapters({
    introduction: introduction,
    subchapters: [
        order_1,
        order_2,
    ],
    title: T.Prose.parse(`Edge Cases`)
}); 