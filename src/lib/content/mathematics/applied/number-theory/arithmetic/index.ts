import { Folder } from "$directory";

import { file as quadratic_residues } from "./quadratic-residues";

export const folder = new Folder({
    title: "Arithmetic Number Theory",
    files: [
        quadratic_residues,
    ],
});