import { Folder } from "$directory";

import { folder as formal } from "./formal";
import { folder as applied } from "./applied";

export const folder = new Folder({
    title: "Mathematics",
    folders: [
        formal,
        applied,
    ],
});
