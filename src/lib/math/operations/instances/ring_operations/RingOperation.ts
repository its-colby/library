import type { TEX } from "$lib/math/tex";
import { properties } from "../properties";
import { Operation } from "../../core/Operation";
import { Arity } from "../../utils/Arity";
import type { Property } from "../../core/Property";

export class RingOperation extends Operation {
    constructor({
        name,
        symbol,
        identity_element,
        additional_properties,
        inverse_definition
    }: {
        name: string,
        symbol: TEX,
        identity_element?: TEX,
        additional_properties?: Property[],
        inverse_definition?: TEX
    }) {
        super({
            name: name,
            symbol: symbol,
            arity: Arity.Binary,
            properties: [
                properties.associativity,
                properties.distributivity,
                ...(additional_properties ?? [])
            ],
            identity_element: identity_element,
            inverse_definition: inverse_definition
        });
    }
}