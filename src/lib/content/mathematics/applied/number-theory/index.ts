import { Folder } from "$lib/content/utils";

import { page as quadratic_residues } from "./quadratic-residues";

export const folder = new Folder({
    title: "Number Theory",
    pages: [
        quadratic_residues,
    ],
});