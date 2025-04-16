import { Folder } from "$directory";

import { file as universal_composability } from "./universal-composability";
import { file as reductions } from "./reductions";
import { file as hybrid_arguments } from "./hybrid-arguments";
import { file as game_based } from "./game-based";

export const folder = new Folder({
    title: "Proof Methods", 
    files: [
        universal_composability,
        reductions,
        hybrid_arguments,
        game_based,
    ]
});

