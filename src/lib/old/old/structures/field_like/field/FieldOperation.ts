import { Tex } from "$lib/math/tex";
import { Property, PROPERTIES } from "$lib/math/operation/";

import { CommutativeRingOperation } from "$lib/math/structures/ring_like";


export class FieldOperation extends CommutativeRingOperation {

    constructor({
        identity_element,
        additional_properties,
        inverse_definition
    }: {
        identity_element?: Tex,
        additional_properties?: Property[],
        inverse_definition?: Tex
    }) {
        super({

            additional_properties: [
                PROPERTIES.EXISTENCE_OF_INVERSES,
                ...(additional_properties ?? [])
            ],

            identity_element: identity_element,
            inverse_definition: inverse_definition
        });
    }
}