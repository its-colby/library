import { Folder } from "$directory";

import { file as regular } from "./regular";
import { file as blind } from "./blind";
import { file as aggregate } from "./aggregate";
import { file as ring } from "./ring";
import { file as threshold } from "./threshold";

export const folder = new Folder({
    title: "Digital Signatures", 
    files: [
        regular,
        blind,
        aggregate,
        ring,
        threshold,
    ]
});


