import * as T from "$lib/book";


const introduction = [
    T.Prose.parse(`
        TBD.
    `),
];


const title = "Number Theory";

import { chapter as c1 } from "./1";

export const number_theory = T.BookChapter.new_document({
    introduction: introduction,
    chapters: [c1],
    title: title,
});



import { Webpage } from "../../utils";

export const number_theory_webpage = new Webpage({
    title: title,
    url: "/mathematics/number-theory",
    published: false,
});