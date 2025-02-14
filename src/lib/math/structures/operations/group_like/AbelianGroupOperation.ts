import type { TEX } from "$lib/math/tex";
import { Property, PROPERTIES } from "$lib/math/operation/";

import { GroupOperation } from "./GroupOperation";



export class AbelianGroupOperation extends GroupOperation {

    constructor({
        identity_element,
        inverse_definition,
        additional_properties
    }: {
        identity_element: TEX,
        inverse_definition: TEX,
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