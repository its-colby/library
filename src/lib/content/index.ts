import { Folder, Page } from "./utils";
import { mathematics } from "./maths";


export const music = new Folder({
    title: "Music",
    pages: [
        new Page({
            title: "Classical Compilation",
            url: "/music/classical-compilation",
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