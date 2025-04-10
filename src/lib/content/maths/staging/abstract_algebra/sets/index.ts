import { Inline, Section, Title } from "$lib/tex";

import { DEFINITION } from "./definition";
import { NUMBERS } from "./numbers";
import { POLYNOMIALS } from "./polys";
import { SYMMETRIES } from "./symmetries";
import { ARITHMETIC } from "./arithmetic";
import { MISC } from "./misc";
export const SETS = new Section({
    title: new Title({
        value: "Sets",
    }),
    sections: [
        DEFINITION,
        NUMBERS,
        POLYNOMIALS,
        SYMMETRIES,
        ARITHMETIC,
        MISC,
    ]
})


// sets of numbers, functions, points, vectors, matrices, polynomials, equivalence classes, sets of sets
// countable, uncountable, finite, infinite, cardinality, subsets, supersets, power sets, cartesion products, set operations (union, etc), empty set, singleton set, closure, well-ordered