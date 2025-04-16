import { Folder } from "$directory";

import { file as general_sieve } from "./general-sieve";
import { file as quadratic_sieve } from "./quadratic-sieve";
import { file as dixons_method } from "./dixons-method";

export const folder = new Folder({
    title: "Integer Factorization", 
    files: [
        general_sieve,
        quadratic_sieve,
        dixons_method,
    ]
});

