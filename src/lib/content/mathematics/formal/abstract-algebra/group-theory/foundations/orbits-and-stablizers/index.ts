import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";
import { chapters as theorems } from "./theorems";

export const chapter = T.BookChapter.new_document({
    title: "Orbits and Stablizers",
    introduction: [
        T.Prose.parse(`
            TBD 
        `),
    ],
    chapters: [...theorems],
});

export const page = Webpage.from_chapter(chapter);