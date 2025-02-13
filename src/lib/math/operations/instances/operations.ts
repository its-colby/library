import { AbelianGroupOperation } from "./group_operations/AbelianGroupOperation";
import type { TEX } from "$lib/math/tex";
import { CommutativeRingOperation } from "./ring_operations/CommutativeRingOperation";

const addition = new AbelianGroupOperation({
    name: "Addition",
    symbol: "+" as TEX,
    identity_element: "0" as TEX,
    inverse_definition: "a + (-a) = 0" as TEX
});

const multiplication = new CommutativeRingOperation({
    name: "Multiplication",
    symbol: "*" as TEX,
    identity_element: "1" as TEX,
    inverse_definition: "a * (1/a) = 1" as TEX
});

export const operations = {
    addition,
    multiplication
};
