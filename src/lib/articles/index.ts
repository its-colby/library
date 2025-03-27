import { Folder, Page } from "$lib/articles/utils";
import { MATHS } from "./maths";

const curated_romantic_music = new Page({
    title: "Curated Romantic Music",
    url: "/music/curated-romantic-music"
})

export const music = new Folder({
    title: "Music",
    pages: [
        curated_romantic_music
    ]
})

export const folders = [
    MATHS,
    // ALGORITHMS,
    music
] as const;

export * from "./utils";