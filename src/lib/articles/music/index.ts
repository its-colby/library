import { metadata as curated_romantic_music } from "./curated_romantic_music";
import { Folder } from "$lib/articles/utils";


export const music = new Folder({
    title: "Music",
    pages: [
        curated_romantic_music
    ]
})