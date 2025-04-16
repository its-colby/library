import * as T from "$book";
import { File } from "$directory";

import { chapter as definition } from "./definition";
import { chapters as examples } from "./examples";
import { chapters as theorems } from "./theorems";

const introduction = [
    T.Prose.parse(`
        This book serves as supplementary reference material for a course on ring theory. Each chapter stands independently, allowing readers to focus on specific topics of interest.
    `),
    T.Prose.parse(`
        The first chapter introduces the definition of a maximal ideal. Subsequent chapters explore diverse examples of maximal ideals, while the final chapters present and prove related theorems and properties.
    `),
];

export const chapter = T.BookChapter.new_document({
    introduction: introduction,
    chapters: [definition, ...examples, ...theorems],
    title: "Maximal Ideals",
});

export const file = File.from_chapter(chapter);