import { Optional } from "$lib/common/optional.type";

import { Tex, Block } from "$lib/math/tex";

import { MathematicalSet } from "$lib/math/structures/set_like/mathematical_set";



export class AlgebraicStructure extends MathematicalSet {

    public readonly declaration: Tex;
    public readonly definitions: Optional<Block>;

    constructor({
        declaration,
        definitions,
    }: {
        declaration: Tex,
        definitions?: Block,
    }) {
        super();

        this.declaration = declaration;

        this.definitions = definitions ? 
            Optional.set(definitions) : 
            Optional.none();
    }
}
