import type { TEX } from "$lib/math/tex";
import { properties } from "../properties";
import { GroupOperation } from "./GroupOperation";
import type { Property } from "../../core/Property";

export class AbelianGroupOperation extends GroupOperation {
    constructor({
        name,
        symbol,
        identity_element,
        inverse_definition,
        additional_properties
    }: {
        name: string,
        symbol: TEX,
        identity_element: TEX,
        inverse_definition: TEX,
        additional_properties?: Property[]
    }) {
        super({
            name: name,
            symbol: symbol,
            identity_element: identity_element,
            additional_properties: [
                properties.commutativity,
                ...(additional_properties ?? [])
            ],
            inverse_definition: inverse_definition
        });
    }
}