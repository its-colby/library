import { Tex } from "$lib/math/tex";
import { Arity, Operation, Property, PROPERTIES } from "$lib/math/operation/";



export class MonoidOperation extends Operation {

    constructor({
        identity_element,
        additional_properties,
        inverse_definition
    }: {
        identity_element: Tex,
        additional_properties?: Property[],
        inverse_definition?: Tex
    }) {

        super({
            arity: Arity.Binary,

            properties: [
                PROPERTIES.TWO_SIDED_IDENTITY,
                PROPERTIES.ASSOCIATIVITY,
                ...(additional_properties ?? [])
            ],
            
            identity_element: identity_element,
            inverse_definition: inverse_definition
        });
    }
}