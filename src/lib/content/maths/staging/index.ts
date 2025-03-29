import { Webpage } from "../../utils";
import * as T from "$lib/book";
import { maximal_ideals } from "./maximal-ideals";

export const staging_webpage = new Webpage({
    title: "Staging",
    url: "/mathematics/staging",
    published: false,
});

export const staging_document = T.BookChapter.new_document({
    chapters: [
        maximal_ideals,
    ],
    title: staging_webpage.title
});