import * as T from "$book";
import { File } from "$directory";
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

export const file = File.from_chapter(chapter);