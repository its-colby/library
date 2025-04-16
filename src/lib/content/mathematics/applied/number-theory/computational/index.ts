import { Folder } from "$directory";

import { folder as primality_testing } from "./primality-testing";
import { folder as integer_factorization } from "./integer-factorization";
import { folder as transforms } from "./transforms";

export const folder = new Folder({
    title: "Computational Number Theory",
    folders: [
        primality_testing,
        integer_factorization,
        transforms,
    ],
});