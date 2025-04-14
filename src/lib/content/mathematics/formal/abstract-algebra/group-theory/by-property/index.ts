import { Category } from "$lib/content/utils/category";

import { page as free } from "./free";
import { page as p_groups } from "./p-groups";
import { page as nilpotent } from "./nilpotent";
import { page as frobenius } from "./frobenius";

export const category = new Category(
    "Classifications by Property", 
    [
        free,
        p_groups,
        nilpotent,
        frobenius,
    ]
);

