import * as T from "$lib/book";
import { Webpage } from "$lib/content/utils";
import { chapters as theorems} from "./theorems";

export const chapter = T.BookChapter.new_document({
    title: "Groups",
    introduction: [
        T.Prose.parse(`
            A group is a set equipped with a single binary operation that satisfies the group axioms. S_n, A_n, cyclic, dihedral, quaternion, general linear, special linear, free groups, 
        `),
    ],
    chapters: [...theorems],
});

export const page = Webpage.from_chapter(chapter);

// quat8
// Q_4n
// coxeter groups