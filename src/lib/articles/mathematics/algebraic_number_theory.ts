import { Page } from "$lib/articles/utils/page";
import * as m from "$lib/math";

export const algebraic_number_theory = new Page({
    title: "Algebraic Number Theory",
    url: "/mathematics/algebraic-number-theory",
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
        m.THE_ALGEBRAIC_NUMBERS,
        m.AN_ALGEBRAIC_NUMBER_FIELD,
        m.THE_ALGEBRAIC_INTEGERS,
        m.ALGEBRAIC_INTEGERS_OF_K,
        m.TWO_SIDED_IDEAL,
        m.IDEALS_OF_THE_INTEGERS,
    ]
)

section2.assign_block_indices({ prefixed_index: new m.Tex("2") });