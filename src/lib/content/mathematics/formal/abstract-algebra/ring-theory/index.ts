import { Folder } from "$directory";

import { folder as rings } from "./rings";
import { folder as foundations } from "./foundations";
import { folder as ideals } from "./ideals";
import { folder as domains } from "./domains";

export const folder = new Folder({
    title: "Ring Theory",
    folders: [
        rings, 
        ideals, 
        domains, 
        foundations
    ],
});