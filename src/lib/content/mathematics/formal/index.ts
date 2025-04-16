import { Folder } from "$directory";

import { folder as abstract_algebra } from "./abstract-algebra";

export const folder = new Folder({
    title: "Formal Mathematics",
    folders: [
        abstract_algebra,
    ],
    slug: "/formal",
});


