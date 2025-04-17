import * as T from "$book";
import { File } from "$directory";
import { chapters as theorems } from "./theorems";

export const chapter = new T.BundledChapters({
    title: "Orbits and Stablizers",
    introduction: [
        T.Prose.parse(`
            TBD 
        `),
    ],
    subchapters: [...theorems],
    is_book: true,
});

export const file = File.from_chapter(chapter);