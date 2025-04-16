import { Folder } from "$directory";

import { file as discrete_fourier } from "./discrete-fourier";
import { file as number_theoretic } from "./number-theoretic";

export const folder = new Folder({
    title: "Transforms", 
    files: [
        discrete_fourier,
        number_theoretic,
    ]
});

