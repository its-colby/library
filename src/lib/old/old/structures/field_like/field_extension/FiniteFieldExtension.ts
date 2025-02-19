import { Tex, Block } from "$lib/math/tex";

import { Field } from "$lib/math/structures/field_like/field";

import { FieldExtension } from "./FieldExtension";
import { FINITE_FIELD_EXTENSION_BB } from "./declarations";


export class FiniteFieldExtension extends FieldExtension {

    constructor({
        declaration,
        definitions,
        base_field,
    }: {
        declaration?: Tex,
        definitions?: Block,
        base_field: Field,
    }) {
        super({
            declaration: declaration ?? FINITE_FIELD_EXTENSION_BB.DEFAULT, 
            definitions, 
            base_field, 
        });
    }

    public static adjoin_declaration({
        elements, 
        base_field
    }: {
        elements: Tex[], 
        base_field: Tex,
    }): Tex {
        return base_field.append(Tex.parens(elements.join(', ')));
    }
}