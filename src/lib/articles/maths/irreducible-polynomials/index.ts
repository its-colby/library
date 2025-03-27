import { Page } from "$lib/articles/utils";
import { Title, Inline, Section, IndexType } from "$lib/tex";
import { GAUSS_LEMMA } from "./01-gauss-lemma";

export const metadata = new Page({
    title: "Irreducible Polynomials",
    url: "/mathematics/irreducible-polynomials",
});

export const CONTENT = new Section({
    title: new Title({
        value: metadata.title,
        index_type: IndexType.NONE
    }),
    sections: [
        GAUSS_LEMMA,
    ]
});

CONTENT.assign_indices({});