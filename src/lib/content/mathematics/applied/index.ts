import { Folder } from "$directory";

import { folder as number_theory } from "./number-theory";

export const folder = new Folder({
    title: "Applied Mathematics",
    folders: [
        number_theory,
    ],
    slug: "applied",
});


