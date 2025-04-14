import { Category } from "$lib/content/utils/category";

import { page as direct } from "./direct";
import { page as semidirect } from "./semidirect";
import { page as wreath } from "./wreath";

export const category = new Category(
    "Products",
    [
        direct,
        semidirect,
        wreath,
    ]
);


