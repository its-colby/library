import { Folder, Webpage } from "./utils";

export const music = new Folder({
    title: "Classical Music",
    pages: [
        new Webpage({
            title: "Compilation of Classical Music",
            url: "/compilation-of-classical-music",
            published: true
        })
    ],
    url: "/classical-music"
});


import { folders as mathematics } from "./mathematics";
import { folders as computer_science } from "./computer-science";

export const folders = [
    ...mathematics,
    ...computer_science,
    music
] as const;

export * from "./utils";