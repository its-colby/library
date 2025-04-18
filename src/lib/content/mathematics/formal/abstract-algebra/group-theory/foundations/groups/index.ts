import * as T from "$book";
import { File } from "$directory";
import { chapters as theorems} from "./theorems";

export const chapter = new T.BundledChapters({
    title: "Groups",
    introduction: [
        T.Prose.parse(`
            A group is a set equipped with a single binary operation that satisfies the group axioms. S_n, A_n, cyclic, dihedral, quaternion, general linear, special linear, free groups, 
        `),
    ],
    subchapters: [...theorems],
    is_book: true,
});

export const file = File.from_chapter(chapter);

// quat8
// Q_4n
// coxeter groups