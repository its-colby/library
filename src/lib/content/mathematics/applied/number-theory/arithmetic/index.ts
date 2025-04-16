import { Folder } from "$directory";

import { file as quadratic_residues } from "./quadratic-residues";

export const folder = new Folder({
    title: "Arithmetic",
    files: [
        quadratic_residues,
    ],
});