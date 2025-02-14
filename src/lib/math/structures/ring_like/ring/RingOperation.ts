import type { TEX } from "$lib/math/tex";
import { Property, PROPERTIES } from "$lib/math/operation/";

import { RNGOperation } from "$lib/math/structures/ring_like/rng";



export class RingOperation extends RNGOperation {

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

            additional_properties: [
                PROPERTIES.TWO_SIDED_IDENTITY,
                ...(additional_properties ?? [])
            ],

            identity_element: identity_element,
            inverse_definition: inverse_definition
        });
    }
}