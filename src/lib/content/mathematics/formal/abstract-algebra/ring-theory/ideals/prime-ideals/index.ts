import * as T from "$book";
import { File } from "$directory";

export const chapter = T.Exposition.as_book([
    T.Prose.parse(`
        A prime ideal is a proper ideal that is prime.
    `),
], T.Prose.parse(`Prime Ideals`));

export const file = File.from_chapter(chapter);