import { page as alternating } from "./alternating";
import { page as cyclic } from "./cyclic";
import { page as dihedral } from "./dihedral";
import { page as symmetric } from "./symmetric";
import { Category } from "$lib/content/utils/category";

export const category = new Category(
    "Family Classifications", 
    [
        alternating,
        cyclic,
        dihedral,
        symmetric,
    ]
);

