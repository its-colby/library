import { Folder } from "$directory";


import { file as alternating } from "./alternating";
import { file as cyclic } from "./cyclic";
import { file as dihedral } from "./dihedral";
import { file as symmetric } from "./symmetric";

export const folder = new Folder({
    title: "Family Classifications", 
    files: [
        alternating,
        cyclic,
        dihedral,
        symmetric,
    ]
});

