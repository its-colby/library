import type { TEX } from "$lib/math/tex";
import { properties } from "../properties";
import type { Property } from "../../core/Property";
import { UnitalRingOperation } from "./UnitalRingOperation";

export class CommutativeRingOperation extends UnitalRingOperation {
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
            additional_properties: [
                properties.commutativity,
                ...(additional_properties ?? [])
            ],
            identity_element: identity_element,
            inverse_definition: inverse_definition
        });
    }
}