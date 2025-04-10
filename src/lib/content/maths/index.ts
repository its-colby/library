import { Folder } from "../utils";

import { staging_webpage } from "./staging";
import { maximal_ideals_webpage } from "./maximal-ideals";
import { number_theory_webpage } from "./number-theory";

export const mathematics = new Folder({
    title: "Mathematics",
    pages: [
        staging_webpage,
        maximal_ideals_webpage,
        number_theory_webpage,
    ]
})




// algebras
// lie-algebras, weyl-algebras