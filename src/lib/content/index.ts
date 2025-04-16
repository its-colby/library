import { Folder } from "$directory";

import { folder as mathematics } from "./mathematics";
import { folder as computer_science } from "./computer-science";
import { folder as miscellaneous } from "./miscellaneous";

export const root = new Folder({
    title: "__root__",
    slug: "",
    root: true,
    folders: [
        mathematics,
        computer_science,
        miscellaneous,
    ],
});