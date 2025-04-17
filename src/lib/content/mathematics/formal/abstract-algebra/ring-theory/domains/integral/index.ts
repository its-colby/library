import * as T from "$book";
import { File } from "$directory";

export const chapter = T.Exposition.as_book([
    T.Prose.parse(`
        An integral domain is a ring that satisfies the integral domain condition on ( one-sided) ideals.
    `),
], T.Prose.parse(`Integral Domains`));

export const file = File.from_chapter(chapter);