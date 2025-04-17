import * as T from "$book";
import { File } from "$directory";

export const chapter = T.Exposition.as_book([
    T.Prose.parse(`
        Free groups.
    `),
], T.Prose.parse(`Free Groups`));

export const file = File.from_chapter(chapter);