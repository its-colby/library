import { algebraic_number_theory } from "$lib/articles/mathematics/algebraic_number_theory";
import { general_number_field_sieve } from "$lib/articles/algorithms/general_number_field_sieve";
import { curated_romantic_music } from "$lib/articles/music/curated_romantic_music";

import { Folder } from "$lib/articles/utils/folder";

export const mathematics = new Folder({
    title: "Mathematics",
    pages: [
        algebraic_number_theory
    ]
})

export const algorithms = new Folder({
    title: "Algorithms",
    pages: [
        general_number_field_sieve
    ]
})

export const music = new Folder({
    title: "Music",
    pages: [
        curated_romantic_music
    ]
})

export const folders = [
    mathematics,
    algorithms,
    music
] as const;