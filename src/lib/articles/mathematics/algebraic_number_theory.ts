import { Page } from "$lib/articles/utils/page";
import * as m from "$lib/math";

export const algebraic_number_theory = new Page({
    title: "Algebraic Number Theory",
    url: "/mathematics/algebraic-number-theory",
});

export const preface_title = m.SectionTitle.preface({ number: "1" });

export const section_2_title = new m.SectionTitle({ text: "Section", number: "2" });

export const section2 = m.Informative.add_numbers({
    parent_number: "2" as m.TEX,
    content: [
        new m.Paragraph({ 
            content: [
                "Hello here is the ",
                {t: "\\land" as m.TEX},
                " symbol"
            ]}),
        {
            title: m.fields.algebraic_numbers.name,
            expressions: m.fields.algebraic_numbers.definitions,
        },
        {
            title: m.field_extensions.algebraic_number_field.name,
            expressions: m.field_extensions.algebraic_number_field.definitions,
        },
        {
            title: m.rings.algebraic_integers.name,
            expressions: m.rings.algebraic_integers.definitions,
        },
        {
            title: m.rings.integer_ring.name,
            expressions: m.rings.integer_ring.definitions,
        },
    ]
});