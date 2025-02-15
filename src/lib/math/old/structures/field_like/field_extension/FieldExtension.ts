import { Tex, Block, Notation as N } from "$lib/math/tex";

import { Field } from "$lib/math/structures/field_like/field";


export class FieldExtension extends Field {

    public base_field: Field;


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
            declaration: declaration ?? 
                FieldExtension.sub_declaration(
                    new Tex(N.BB.F), 
                    base_field.declaration
                ),
            definitions,
        });

        this.base_field = base_field;
    }

    public static sub_declaration(field: Tex, base_field: Tex): Tex {
        return field.subscript(base_field);
    }

    public static slash_declaration(field: Tex, base_field: Tex): Tex {
        return field.divides(base_field);
    }
}