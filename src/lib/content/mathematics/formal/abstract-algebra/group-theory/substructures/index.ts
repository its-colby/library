import { Folder } from "$directory";

import { file as centers } from "./centers";
import { file as cosets } from "./cosets";
import { file as conjugacy_classes } from "./conjugacy-classes";
import { file as normal_subgroups } from "./normal-subgroups";

export const folder = new Folder({
    title: "Substructures", 
    files: [
        centers,
        cosets,
        normal_subgroups,
        conjugacy_classes,
    ]
});

