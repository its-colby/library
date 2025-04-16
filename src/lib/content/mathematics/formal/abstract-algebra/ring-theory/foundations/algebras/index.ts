import * as T from "$book";
import { File } from "$directory";

import { chapter as c1 } from "./quaternions";
import { chapter as c2 } from "./weyl";

const introduction = [
    T.Prose.parse(`
        TBD
    `),
];

export const chapter = T.BookChapter.new_document({
    introduction: introduction,
    chapters: [c1, c2],
    title: "Algebras",
});

export const file = File.from_chapter(chapter);


/*


Algebra over a field
- associative algebra
- commutative algebra
- non-associative algebra
- subalgebras
- algebras with field extensions
- zero algebra
- group algebra
- hopf algebra
- lie algebra
- jordan algebra
- division algebra
*/