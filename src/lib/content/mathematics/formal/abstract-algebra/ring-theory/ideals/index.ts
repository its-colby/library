import { Folder } from "$directory";

import { file as maximal_ideals } from "./maximal-ideals";
import { file as prime_ideals } from "./prime-ideals";

export const folder = new Folder({
    title: "Ideals",
    files: [
        maximal_ideals, 
        prime_ideals
    ]
});

