import { Category } from "$lib/content/utils/category";

import { page as groups } from "./groups";
import { page as orbits_and_stablizers } from "./orbits-and-stablizers";
import { page as group_actions } from "./group-actions";
import { page as presentations } from "./presentations";

export const category = new Category(
    "Foundations", 
    [
        groups,
        orbits_and_stablizers,
        group_actions,
        presentations,
    ]
);

