import { Page } from "$lib/articles/utils";
import * as T from "$lib/tex";
import { IndexType } from "$lib/tex";
import { IDEALS } from "./01-ideals";

export const metadata = new Page({
    title: "Introduction to Ring Theory",
    url: "/mathematics/ring-theory",
});

export const RING_THEORY = new T.Section({
    title: new T.Title({
        value: metadata.title,
        index_type: IndexType.NONE
    }),
    sections: [
        IDEALS,
    ]
});

RING_THEORY.assign_indices({});