import { page as formalization } from "./formalization";
import { page as circuits } from "./circuits";
import { page as oblivious_transfer } from "./oblivious-transfer";
import { page as private_set_intersection } from "./private-set-intersection";
import { Category } from "$lib/content/utils/category";

export const category = new Category(
    "Multi-Party Computation", 
    [
        formalization,
        private_set_intersection,
        circuits,
        oblivious_transfer,
    ]
);

