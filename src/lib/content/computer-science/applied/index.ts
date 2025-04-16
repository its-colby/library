import { Folder } from "$directory";

import { folder as cryptology } from "./cryptology";

export const folder = new Folder({
    title: "Applied",
    folders: [
        cryptology,
    ],
    slug: "applied",
});
