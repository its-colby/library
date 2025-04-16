import { Folder } from "$directory";

import { file as rings } from "./rings";
import { file as algebras } from "./algebras";

export const folder = new Folder({
    title: "Foundations",
    files: [
        rings, 
        algebras
    ]
});

