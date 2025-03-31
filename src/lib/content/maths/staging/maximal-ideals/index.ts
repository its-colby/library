import * as T from "$lib/book";
import { integer_polynomials } from "./integer-polynomials";
import { integers_mod_n } from "./integers-mod-n";
import { real_polynomials } from "./real-polynomials";
import { krulls_theorem } from "./krulls-theorem";
export const maximal_ideals = T.BookChapter.from_subchapters({
    subchapters: [
        integers_mod_n,
        krulls_theorem,
        integer_polynomials,
        real_polynomials,
    ],
    title: "Maximal Ideals",
});



// TODO:
// - weak Nullstellensatz?
// -  A radical ring has no maximal ideals?