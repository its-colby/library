import { Optional } from "$lib/common/optional.type";
import type { TEX } from "$lib/math/tex";
import { Property } from "./Property";
import { Arity } from "../utils/Arity";

export class Operation {
    public name: string;
    public symbol: TEX;
    public arity: Arity;
    public properties: Property[];
    public identity_element: Optional<TEX>;
    public inverse_definition: Optional<TEX>;
    
    constructor({
        name,
        symbol,
        arity,
        properties,
        identity_element,
        inverse_definition
    }: {
        name: string,
        symbol: TEX,
        arity: number,
        properties: Property[],
        identity_element?: TEX,
        inverse_definition?: TEX
    }) {
        this.name = name;
        this.symbol = symbol;
        this.arity = arity;
        this.properties = properties;
        this.identity_element = identity_element ? Optional.set(identity_element) : Optional.none();
        this.inverse_definition = inverse_definition ? 
            Optional.set(inverse_definition) : 
            Optional.none();
    }
}