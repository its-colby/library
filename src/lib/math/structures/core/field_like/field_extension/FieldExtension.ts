import { type TEX, Block, Notation as N } from "$lib/math/tex";

import { Field } from "$lib/math/structures/core/field_like/field";


export class FieldExtension extends Field {

    public base_field: Field;


    constructor({
        declaration,
        definitions,
        base_field,
    }: {
        declaration?: TEX,
        definitions?: Block,
        base_field: Field,
    }) {

        super({
            declaration: declaration ?? 
                FieldExtension.sub_declaration(
                    N.BB.F as TEX, 
                    base_field.declaration
                ),
            definitions,
        });

        this.base_field = base_field;
    }

    public static sub_declaration(field: TEX, base_field: TEX): TEX {
        return N.concat([field, N.sub(base_field)]);
    }

    public static slash_declaration(field: TEX, base_field: TEX): TEX {
        return `${field} / ${base_field}` as TEX;
    }
}