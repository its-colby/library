import { Statement, Block, Notation as N, Tex } from "$lib/math/tex";
import { RNG_DEFAULT_BB } from "$lib/math/structures/ring_like/rng";



const TWO_SIDED_IDEAL_BB = new Tex(N.CAL.I);

namespace Definition {

    export const HEADER = TWO_SIDED_IDEAL_BB.text(" is a two-sided ideal of ").append(RNG_DEFAULT_BB).iff();

    export const CONDITION_A = TWO_SIDED_IDEAL_BB.text(" is a subrng of ").append(RNG_DEFAULT_BB);

    export const CONDITION_B = new Tex("").forall("a").in(TWO_SIDED_IDEAL_BB).space().comma().space().forall("b").in(RNG_DEFAULT_BB).space().comma().space().append("a").times("b").equals("b").times("a").in(TWO_SIDED_IDEAL_BB);
}


export const TWO_SIDED_IDEAL_DEFINITION = Block.from_definition({
    title: Tex.from_text("Two-Sided Ideal"),
    statements: [
        Statement.with_conditions({
            primary: Definition.HEADER,
            conditions: [
                Definition.CONDITION_A,
                Definition.CONDITION_B
            ]
        })
    ]
});

