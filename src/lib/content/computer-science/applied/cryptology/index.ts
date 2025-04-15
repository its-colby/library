import { Folder } from "$lib/content/utils";

import { category as proof_methods } from "./proof-methods";
import { category as computational_assumptions } from "./computational-assumptions";
import { category as mpc } from "./mpc";
import { category as digital_signatures } from "./digital-signatures";
export const folder = new Folder({
    title: "Cryptology",
    categories: [
        proof_methods,
        computational_assumptions,
        mpc,
        digital_signatures,
    ],
});