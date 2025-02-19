import { Page } from "$lib/articles/utils";
import * as m from "$lib/math";

export const metadata = new Page({
    title: "Topology",
    url: "/mathematics/topology",
});

export const preface_title = { text: "Preface", number: "1" };

export const section_2_title = { text: "Section", number: "2" };

export const section2 = new m.Content(
    [
        new m.Inline({ 
            value: [
                "Hello here is the ",
                new m.Tex("\\land"),
                " symbol"
            ]
        }),
        m.METRIC_SPACE,
        m.TOPOLOGICAL_SPACE,
        m.HAUSDORFF_SPACE,
        m.N_MANIFOLDS,
        // m.THE_SIERPINSKI_SPACE,
    ]
)

section2.assign_block_indices({ prefixed_index: new m.Tex("2") });


// continuity — a property of the preimage should be in the image?
// why would open sets capture this?