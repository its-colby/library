import type { TEX } from "$lib/math/tex";
import { MathematicalSet } from "$lib/math/logic/sets";
import { Operation } from "$lib/math/operations/index";
import { Optional } from "$lib/common/optional.type";

export class AlgebraicStructure extends MathematicalSet {
    public declaration: TEX;
    public definitions: TEX[];
    public operations: Operation[];
    public _name: Optional<string>;

    constructor({
        declaration,
        definitions,
        operations,
        name
    }: {
        declaration: TEX,
        definitions: TEX[],
        operations: Operation[],
        name?: string
    }) {
        super();
        this.declaration = declaration;
        this.definitions = definitions;
        this.operations = operations;
        this._name = name ? Optional.set(name) : Optional.none();
    }

    public get name(): string {
        return this._name.is_set() ? this._name.value : "Unnamed";
    }

    static bold({
        letter, 
        sub, 
        exp,
    }: {
        letter: string, 
        sub?: string, 
        exp?: string
    }): TEX {
        const sub_tex = sub ? `_{${sub}}` : "";
        const exp_tex = exp ? `^{${exp}}` : "";
        return `\\mathbb{${letter}${sub_tex}${exp_tex}}` as TEX;
    }
}
