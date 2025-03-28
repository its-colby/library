import { Page } from "$lib/articles/utils";
import * as T from "$lib/tex";
import { IDEALS } from "./01-ideals";

export const metadata = new Page({
    title: "Introduction to Ring Theory",
    url: "/mathematics/ring-theory",
});

export const RING_THEORY = T.Section.new_document([
    IDEALS,
], metadata.title);