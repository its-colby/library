import { Optional } from "$lib/common/optional.type";
import { type TEX } from "$lib/math/tex";

import { Arity } from "./Arity";
import { Property } from "./Property";



export class Operation {

    public readonly arity: Arity;
    public readonly properties: Property[];
    public readonly identity_element: Optional<TEX>;
    public readonly inverse_definition: Optional<TEX>;
    

    constructor({
        arity,
        properties,
        identity_element,
        inverse_definition
    }: {
        arity: number,
        properties: Property[],
        identity_element?: TEX,
        inverse_definition?: TEX
    }) {

        this.arity = arity;
        this.properties = properties;

        this.identity_element = identity_element ? 
            Optional.set(identity_element) : 
            Optional.none();

        this.inverse_definition = inverse_definition ? 
            Optional.set(inverse_definition) : 
            Optional.none();
    }
}