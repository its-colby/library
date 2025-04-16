import { Folder } from "$directory";

import { file as groups } from "./groups";
import { file as orbits_and_stablizers } from "./orbits-and-stablizers";
import { file as group_actions } from "./group-actions";
import { file as presentations } from "./presentations";


export const folder = new Folder({
    title: "Foundations", 
    files: [
        groups,
        orbits_and_stablizers,
        group_actions,
        presentations,
    ]
});

