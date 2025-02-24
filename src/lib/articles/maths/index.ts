import { metadata as algebraic_number_theory } from "./algebraic_number_theory";
import { metadata as abstract_algebra } from "./abstract_algebra";
import { Folder } from "$lib/articles/utils";

export const MATHS = new Folder({
    title: "Mathematics",
    pages: [
        algebraic_number_theory,
        abstract_algebra
    ]
})