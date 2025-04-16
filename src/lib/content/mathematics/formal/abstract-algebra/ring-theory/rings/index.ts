import { Folder } from "$directory";

import { file as local_rings } from "./local-rings";
import { file as simple_rings } from "./simple-rings";
import { file as boolean_rings } from "./boolean-rings";
import { file as noetherian_rings } from "./noetherian-rings";
import { file as artinian_rings } from "./artinian-rings";

export const folder = new Folder({
    title: "Rings", 
    files: [
        local_rings, 
        simple_rings, 
        boolean_rings, 
        noetherian_rings, 
        artinian_rings
    ]
});
