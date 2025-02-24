import { Page } from "$lib/articles/utils";
import { Title, Inline, Section, IndexType } from "$lib/tex";
import { ALGEBRAIC_STRUCTURES } from "./structures";
import { SETS } from "./sets";
import { OPERATIONS } from "./operations";
import { HOMOMORPHISMS } from "./homomorphisms";
import { INTRODUCTION } from "./intro";
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
        INTRODUCTION,
        SETS,
        OPERATIONS,
        ALGEBRAIC_STRUCTURES,
        HOMOMORPHISMS,
    ]
});

CONTENT.assign_indices({});