import { Statement, Block, Notation as N, type TEX } from "$lib/math/tex";
import { RNG_DEFAULT_BB } from "$lib/math/structures/ring_like/rng";



const TWO_SIDED_IDEAL_BB = N.CAL.I as TEX;

namespace Definition {

    export const HEADER = N.concat([
        TWO_SIDED_IDEAL_BB, 
        N.is_a("two-sided ideal of"), 
        RNG_DEFAULT_BB, 
        N.IFF
    ]);

    export const CONDITION_A = N.concat([
        TWO_SIDED_IDEAL_BB, 
        N.is_a("subrng of"),
        RNG_DEFAULT_BB
    ])

    export const CONDITION_B = N.space_conditions([
        N.forall("a", TWO_SIDED_IDEAL_BB),
        N.COMMA,
        N.forall("b", RNG_DEFAULT_BB),
        N.COMMA,
        N.member(
            N.equivalent(
                N.multiply("a", "b"),
                N.multiply("b", "a")
            ),
            TWO_SIDED_IDEAL_BB
        )
    ])
}


export const TWO_SIDED_IDEAL_DEFINITION = new Block({

    header: { title: "Two-Sided Ideal"},
    statements: [
        new Statement({
            header: Definition.HEADER,
            children: [
                Definition.CONDITION_A,
                Definition.CONDITION_B
            ],
            children_labels: true
        })
    ]
});

