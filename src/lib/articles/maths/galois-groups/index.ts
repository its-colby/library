import { Page } from "$lib/articles/utils";
import { Title, Inline, Section, IndexType } from "$lib/tex";
import { QUADRATIC_FIELDS } from "./01-quadratic-fields";
import { CYCLOTOMIC_FIELDS } from "./02-cyclotomic-fields";
export const metadata = new Page({
    title: "Galois Groups",
    url: "/mathematics/galois-groups",
});

export const CONTENT = new Section({
    title: new Title({
        value: metadata.title,
        index_type: IndexType.NONE
    }),
    sections: [
        QUADRATIC_FIELDS,
        CYCLOTOMIC_FIELDS,
    ]
});

CONTENT.assign_indices({});