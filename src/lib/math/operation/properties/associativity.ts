import { Block, Statement, Notation as N } from "$lib/math/tex";
import { Property } from "../core";

import { op } from "./util";

const ab = op(["a", "b"])
const bc = op(["b", "c"])
const a_bc = op(["a", bc])
const ab_c = op([ab, "c"])

export const ASSOCIATIVITY = new Property({
    definition: new Block({
        header: {title: "Associative Property"},
        statements: [
            new Statement({
                header: N.equivalent(a_bc, ab_c)
            })
        ]
    })
});