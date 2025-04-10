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

export const folders = [
    ...mathematics,
    music
] as const;

export * from "./utils";