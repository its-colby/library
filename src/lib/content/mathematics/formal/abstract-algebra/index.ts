import { Folder } from "$directory";

import { folder as group_theory } from "./group-theory";
import { folder as ring_theory } from "./ring-theory";

export const folder = new Folder({
    title: "Abstract Algebra",
    folders: [
        group_theory,
        ring_theory,
    ],
});
