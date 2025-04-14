import * as T from "$lib/book";

import { chapter as z_8z_all } from "./z-8z-all";
import { chapter as z_8z_coprime } from "./z-8z-coprime";
import { chapter as z_5z } from "./z-5z";
import { chapter as z_7z_subgroup } from "./z-7z-subgroup";

const introduction = [
    T.Prose.parse(`
        We will now investigate examples and non-examples of cyclic groups in the context of multiplicative integers modulo n.
        These examples will demonstrate both groups that are cyclic and those that are not, as well as sets that fail to be groups at all.
    `),
];

export const chapter = T.BookChapter.from_subchapters({
    introduction: introduction,
    subchapters: [
        z_8z_all,
        z_8z_coprime,
        z_5z,
        z_7z_subgroup,
    ],
    title: T.Prose.parse(`$$\\mathbb{Z}/n\\mathbb{Z}^\\times$$`)
}); 