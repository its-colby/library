import * as T from "$book";
import { File } from "$directory";

export const chapter = T.Exposition.as_book([
    T.Prose.parse(`
        TBD 
    `),
], T.Prose.parse(`Group Actions`));

export const file = File.from_chapter(chapter);