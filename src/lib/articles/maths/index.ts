import { metadata as algebraic_number_theory } from "./algebraic_number_theory";
import { metadata as abstract_algebra } from "./abstract_algebra";
import { metadata as galois_groups } from "./galois-groups";
import { metadata as irreducible_polynomials } from "./irreducible-polynomials";
import { metadata as ring_theory } from "./ring-theory";
import { Folder } from "$lib/articles/utils";

export const MATHS = new Folder({
    title: "Mathematics",
    pages: [
        // algebraic_number_theory,
        // abstract_algebra
        // galois_groups,
        irreducible_polynomials,
        ring_theory
    ]
})