import { Folder } from "$directory";

import { file as miller_rabin } from "./miller-rabin";

export const folder = new Folder({
    title: "Primality Testing", 
    files: [
        miller_rabin,
    ]
});

