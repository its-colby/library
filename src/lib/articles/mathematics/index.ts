import { metadata as algebraic_number_theory } from "./algebraic_number_theory";
import { metadata as topology } from "./topology";
import { Folder } from "$lib/articles/utils";

export const mathematics = new Folder({
    title: "Mathematics",
    pages: [
        algebraic_number_theory,
        topology
    ]
})