import { Folder, Webpage } from "./utils";
import { mathematics } from "./maths";


export const music = new Folder({
    title: "Music",
    pages: [
        new Webpage({
            title: "Compilation of Classical Music",
            url: "/music/compilation-of-classical-music",
            published: true
        })
    ]
});

export const folders = [
    mathematics,
    music
] as const;


export * from "./utils";
export * from "./maths";
export * from "./music";