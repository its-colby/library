import { AlgebraicStructure } from "$lib/math/algebraic_structures/algebraic_structure";
import type { TEX } from "$lib/math/tex";
import { Group } from "$lib/math/algebraic_structures/groups";

export class Ideal extends Group {
    constructor({
        declaration,
        definitions
    }: {
        declaration: TEX,
        definitions: TEX[]
    }) {
        super({declaration, definitions});
    }
}