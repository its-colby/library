import { Tex } from "$lib/math/tex";
import { Property, PROPERTIES } from "$lib/math/operation/";

import { GroupOperation } from "$lib/math/structures/group_like/group";



export class AbelianGroupOperation extends GroupOperation {

    constructor({
        identity_element,
        inverse_definition,
        additional_properties
    }: {
        identity_element: Tex,
        inverse_definition: Tex,
        additional_properties?: Property[]
    }) {
        super({

            identity_element: identity_element,

            additional_properties: [
                PROPERTIES.COMMUTATIVITY,
                ...(additional_properties ?? [])
            ],
            
            inverse_definition: inverse_definition
        });
    }
}