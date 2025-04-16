import { Folder } from "$directory";

import { folder as applied } from "./applied";

export const folder = new Folder({
    title: "Computer Science",
    folders: [
        applied,
    ],
});
