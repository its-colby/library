import { Folder } from "$directory";

import { file as direct } from "./direct";
import { file as semidirect } from "./semidirect";
import { file as wreath } from "./wreath";

export const folder = new Folder({
    title: "Products",
    files: [
        direct,
        semidirect,
        wreath,
    ]
});


