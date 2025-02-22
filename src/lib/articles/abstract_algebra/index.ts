import { Page } from "$lib/articles/utils";
import { Title, Inline, Section, IndexType } from "$lib/tex";
import { ALGEBRAIC_STRUCTURES } from "./structures";
import { SETS } from "./sets";
export const metadata = new Page({
    title: "Abstract Algebra",
    url: "/mathematics/abstract-algebra",
});

export const CONTENT = new Section({
    title: new Title({
        inline: new Inline([metadata.title]),
        index_type: IndexType.NONE
    }),
    sections: [
        SETS,
        ALGEBRAIC_STRUCTURES
    ]
});

CONTENT.assign_indices({});