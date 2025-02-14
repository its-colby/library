import { Optional } from "$lib/common/optional.type";

import { type TEX, Block } from "$lib/math/tex";

import { MathematicalSet } from "$lib/math/structures/core/set_like/mathematical_set";



export class AlgebraicStructure extends MathematicalSet {

    public readonly declaration: TEX;
    public readonly definitions: Optional<Block>;

    constructor({
        declaration,
        definitions,
    }: {
        declaration: TEX,
        definitions?: Block,
    }) {
        super();

        this.declaration = declaration;

        this.definitions = definitions ? 
            Optional.set(definitions) : 
            Optional.none();
    }
}
