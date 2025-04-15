import { page as universal_composability } from "./universal-composability";
import { page as reductions } from "./reductions";
import { page as hybrid_arguments } from "./hybrid-arguments";
import { page as game_based } from "./game-based";
import { Category } from "$lib/content/utils/category";

export const category = new Category(
    "Proof Methods", 
    [
        universal_composability,
        reductions,
        hybrid_arguments,
        game_based,
    ]
);

