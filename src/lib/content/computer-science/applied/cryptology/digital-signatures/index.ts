import { page as regular } from "./regular";
import { page as blind } from "./blind";
import { page as aggregate } from "./aggregate";
import { page as ring } from "./ring";
import { page as threshold } from "./threshold";
import { Category } from "$lib/content/utils/category";

export const category = new Category(
    "Digital Signatures", 
    [
        regular,
        blind,
        aggregate,
        ring,
        threshold,
    ]
);

