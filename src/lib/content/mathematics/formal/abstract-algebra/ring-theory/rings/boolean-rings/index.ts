import * as T from "$book";
import { File } from "$directory";

export const chapter = T.Exposition.as_book([
    T.Prose.parse(`
        A boolean ring is a ring where every element is idempotent.
    `),
], T.Prose.parse(`Boolean Rings`));

export const file = File.from_chapter(chapter);