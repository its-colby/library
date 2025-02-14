import { Block, Statement, Notation as N } from "$lib/math/tex";
import { Property } from "../core";

import { op } from "./util";


const ai = op(["a", "i"]);
const ia = op(["i", "a"]);
const ai_ia = N.equivalent(ai, ia);

export const TWO_SIDED_IDENTITY = new Property({
    definition: new Block({
        header: {title: "Two-Sided Identity"},
        statements: [
            new Statement({
                header: N.equivalent(ai_ia, "a")
            })
        ]
    })
});