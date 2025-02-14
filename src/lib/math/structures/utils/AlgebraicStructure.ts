import { Optional } from "$lib/common/optional.type";

import { type TEX, Block } from "$lib/math/tex";
import { Operation } from "$lib/math/operations";

import { MathematicalSet } from "./MathematicalSet";



export class AlgebraicStructure extends MathematicalSet {

    public readonly declaration: TEX;
    public readonly definitions: Optional<Block>;
    public readonly operations: Operation[];


    constructor({
        declaration,
        definitions,
        operations,
    }: {
        declaration: TEX,
        definitions?: Block,
        operations: Operation[],
    }) {
        super();

        this.declaration = declaration;

        this.definitions = definitions ? 
            Optional.set(definitions) : 
            Optional.none();
            
        this.operations = operations;
    }
}
