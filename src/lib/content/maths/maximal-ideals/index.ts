import * as T from "$lib/book";

// import { integer_polynomials } from "./integer-polynomials";
// import { integers_mod_n } from "./integers-mod-n";
// import { real_polynomials } from "./real-polynomials";

const introduction = [
    T.Prose.parse(`
        A maximal ideal is a special type of ideal in a ring.
    `),
];

import { chapter as c1 } from "./1-definition";
import { chapter as c2 } from "./2-krulls-theorem";
import { chapter as c3 } from "./3-maximal-vs-prime";
import { chapter as c4 } from "./4-residues";
import { chapter as c5 } from "./5-local-rings";
import { chapter as c6 } from "./6-z-polynomials";
import { chapter as c7 } from "./7-c-polynomials";
import { chapter as c8 } from "./8-quaternions";
import { chapter as c9 } from "./9-weyl-algebras";


const title = "Maximal Ideals";

export const maximal_ideals = T.BookChapter.new_document({
    introduction: introduction,
    chapters: [c1, c2, c3, c4, c5, c6, c7, c8, c9],
    title: title,
});



import { Webpage } from "../../utils";

export const maximal_ideals_webpage = new Webpage({
    title: title,
    url: "/mathematics/maximal-ideals",
    published: true,
});