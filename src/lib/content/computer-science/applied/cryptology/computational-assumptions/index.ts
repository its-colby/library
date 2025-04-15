import { page as integer_factorization } from "./integer-factorization";
import { page as discrete_logarithm } from "./discrete-logarithm";
import { page as bilinear_pairings } from "./bilinear-pairings";
import { Category } from "$lib/content/utils/category";

export const category = new Category(
    "Computational Assumptions", 
    [
        integer_factorization,
        discrete_logarithm,
        bilinear_pairings,
    ]
);

