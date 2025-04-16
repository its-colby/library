import { Folder } from "$directory";

import { file as free } from "./free";
import { file as p_groups } from "./p-groups";
import { file as nilpotent } from "./nilpotent";
import { file as frobenius } from "./frobenius";

export const folder = new Folder({
    title: "Classifications by Property", 
    files: [
        free,
        p_groups,
        nilpotent,
        frobenius,
    ]
});

