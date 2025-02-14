import { Page } from "$lib/articles/utils/page";
import * as m from "$lib/math";

export const algebraic_number_theory = new Page({
    title: "Algebraic Number Theory",
    url: "/mathematics/algebraic-number-theory",
});

export const preface_title = m.SectionTitle.preface({ number: "1" });

export const section_2_title = new m.SectionTitle({ text: "Section", number: "2" });

export const section2 = new m.Informative({
    content: [
        new m.Paragraph({ 
            content: [
                "Hello here is the ",
                {t: "\\land" as m.TEX},
                " symbol"
            ]
        }),
        m.FIELDS.ALGEBRAIC_NUMBERS.definitions.value,
        m.FIELD_EXTENSIONS.ALGEBRAIC_NUMBER_FIELD.definitions.value,
        m.COMMUTATIVE_RINGS.ALGEBRAIC_INTEGERS.definitions.value,
        m.COMMUTATIVE_RINGS.ALGEBRAIC_INTEGERS_OF_K.definitions.value,
        m.TWO_SIDED_IDEAL_DEFINITION,
    ]
});

section2.add_numbers({
    parent_number: "2" as m.TEX,
});