import { Category } from "$lib/content/utils/category";

import { page as centers } from "./centers";
import { page as cosets } from "./cosets";
import { page as conjugacy_classes } from "./conjugacy-classes";
import { page as normal_subgroups } from "./normal-subgroups";

export const category = new Category(
    "Substructures", 
    [
        centers,
        cosets,
        normal_subgroups,
        conjugacy_classes,
    ]
);

