import { File, Folder } from "$directory";

export const classical_music_compilation = new File({
    title: "Compilation of Classical Music"
});

export const folder = new Folder({
    title: "Miscellaneous",
    files: [
        classical_music_compilation,
    ],
});
