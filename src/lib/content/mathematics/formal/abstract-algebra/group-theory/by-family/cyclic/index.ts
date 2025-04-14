import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";

import { chapters as examples } from "./examples";

export const chapter = T.BookChapter.new_document({
    introduction: [
        T.Prose.parse(`
            Cyclic groups.
        `),
    ],
    chapters: [
        ...examples,
    ],
    title: T.Prose.parse(`Cyclic Groups`),
});

export const page = Webpage.from_chapter(chapter);

// infinite
// integers (mult, add)


// finite
// integers modulo n (add)
// direct product of cyclic groups