import * as T from "$lib/book";
import { integers_mod_5 } from "./01-mod-5";
import { integers_mod_6 } from "./02-mod-6";
import { general_form } from "./03-general";

const introduction = [
    T.Prose.parse(`
        We will now investigate whether particular ideals of $$\\mathbb{Z}/n\\mathbb{Z}$$ are maximal.
    `),
];


export const integers_mod_n = T.BookChapter.from_subchapters({
    introduction: introduction,
    subchapters: [
        integers_mod_5,
        integers_mod_6,
        general_form,
    ],
    title: T.Prose.parse(`Maximality in $$\\mathbb{Z}/n\\mathbb{Z}$$`)
});

