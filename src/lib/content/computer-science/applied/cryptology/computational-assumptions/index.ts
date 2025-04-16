import { Folder } from "$directory";

import { file as integer_factorization } from "./integer-factorization";
import { file as discrete_logarithm } from "./discrete-logarithm";
import { file as bilinear_pairings } from "./bilinear-pairings";

export const folder = new Folder({
    title: "Computational Assumptions", 
    files: [
        integer_factorization,
        discrete_logarithm,
        bilinear_pairings,
    ]
});

