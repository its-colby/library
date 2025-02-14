import type { TEX } from "$lib/math/tex";
import { Arity, Operation, Property, PROPERTIES } from "$lib/math/operation/";



export class RNGOperation extends Operation {
    constructor({
        identity_element,
        additional_properties,
        inverse_definition
    }: {
        identity_element?: TEX,
        additional_properties?: Property[],
        inverse_definition?: TEX
    }) {
        super({
            arity: Arity.Binary,
            properties: [
                PROPERTIES.ASSOCIATIVITY,
                PROPERTIES.DISTRIBUTIVITY,
                ...(additional_properties ?? [])
            ],
            identity_element: identity_element,
            inverse_definition: inverse_definition
        });
    }
}