import { Folder } from "$directory";

import { folder as proof_methods } from "./proof-methods";
import { folder as computational_assumptions } from "./computational-assumptions";
import { folder as mpc } from "./mpc";
import { folder as digital_signatures } from "./digital-signatures";

export const folder = new Folder({
    title: "Cryptology",
    folders: [
        proof_methods,
        computational_assumptions,
        mpc,
        digital_signatures,
    ],
});