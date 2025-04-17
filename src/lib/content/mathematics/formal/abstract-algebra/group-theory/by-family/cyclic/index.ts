import * as T from "$book";
import { File } from "$directory";

import { chapters as examples } from "./examples";

export const chapter = new T.BundledChapters({
    introduction: [
        T.Prose.parse(`
            Cyclic groups.
        `),
    ],
    subchapters: [
        ...examples,
    ],
    title: T.Prose.parse(`Cyclic Groups`),
    is_book: true,
});

export const file = File.from_chapter(chapter);

// infinite
// integers (mult, add)


// finite
// integers modulo n (add)
// direct product of cyclic groups