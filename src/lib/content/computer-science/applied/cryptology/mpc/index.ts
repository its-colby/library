import { Folder } from "$directory";

import { file as formalization } from "./formalization";
import { file as circuits } from "./circuits";
import { file as oblivious_transfer } from "./oblivious-transfer";
import { file as private_set_intersection } from "./private-set-intersection";

export const folder = new Folder({
    title: "Multi-Party Computation", 
    files: [
        formalization,
        private_set_intersection,
        circuits,
        oblivious_transfer,
    ]
});

