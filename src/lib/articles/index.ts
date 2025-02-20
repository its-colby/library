import { metadata as algebraic_number_theory } from "./algebraic_number_theory";
import { metadata as ring_theory } from "./ring_theory";
import { Folder, Page } from "$lib/articles/utils";

const mathematics = new Folder({
    title: "Mathematics",
    pages: [
        algebraic_number_theory,
        ring_theory
    ]
})

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
    mathematics,
    music
] as const;

export * from "./utils";