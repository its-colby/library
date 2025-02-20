import { Page } from "$lib/articles/utils";
import { Title, Inline, Section, IndexType } from "$lib/tex";

export const metadata = new Page({
    title: "Algebraic Number Theory",
    url: "/mathematics/algebraic-number-theory",
});

import { PREFACE_SECTION } from "./preface";
import { THE_SET_OF_ALGEBRAIC_NUMBERS_SECTION } from "./algebraic_numbers";

export const CONTENT = new Section({
    title: new Title({
        inline: new Inline([metadata.title]),
        index_type: IndexType.NONE
    }),
    sections: [
        PREFACE_SECTION,
        THE_SET_OF_ALGEBRAIC_NUMBERS_SECTION
    ]
});

CONTENT.assign_indices({});