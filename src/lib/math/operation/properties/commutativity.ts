import { Block, Statement, Notation as N } from "$lib/math/tex";
import { Property } from "../core";

import { op } from "./util";


const ab = op(["a", "b"])
const ba = op(["a", "b"])

export const COMMUTATIVITY = new Property({
    definition: new Block({
        header: {title: "Commutative Property"},
        statements: [
            new Statement({
                header: N.equivalent(ab, ba)
            })
        ]
    })
});