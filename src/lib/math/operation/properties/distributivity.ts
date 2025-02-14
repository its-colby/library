import { Block, Statement, Notation as N } from "$lib/math/tex";
import { Property } from "../core";

import { op } from "./util";

const b_plus_c = op(["b", "c"], 1)
const a_times_b_plus_c = op(["a", b_plus_c], 2)
const a_times_b = op(["a", "b"], 2)
const a_times_c = op(["a", "c"], 2)
const a_times_b_plus_a_times_c = op([
    a_times_b,
    a_times_c
], 1)

export const DISTRIBUTIVITY = new Property({
    definition: new Block({
        header: {title: "Distributive Property"},
        statements: [
            new Statement({
                header: N.equivalent(
                    a_times_b_plus_c, 
                    a_times_b_plus_a_times_c
                )
            })
        ]
    })
});