import { Block, Statement, Notation as N } from "$lib/math/tex";
import { Property } from "../core";

import { op } from "./util";


const a_op_inverse = op(["a", "b"]);

export const EXISTENCE_OF_INVERSES = new Property({
    definition: new Block({
        header: {title: "Existence of Inverses"},
        statements: [
            new Statement({
                header: N.such_that(
                    N.space_conditions([
                        `${N.text("Given an identity element ", false)} i`,
                        N.COMMA,
                        `${N.ALL} a`,
                        N.COMMA,
                        `${N.SOME} b`, 
                    ]),
                    `${a_op_inverse} = i`)
            })
        ]
    })
});
