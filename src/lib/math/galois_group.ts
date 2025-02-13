import { FieldExtension } from "./structures/index";
import { Polynomial } from "./polynomial";
import { type TEX } from "$lib/math/tex";

export interface GaloisGroupState {
    minimal_polynomial: Polynomial;
    splitting_field: FieldExtension;
    automorphisms: TEX[];
}

export class GaloisGroup {
    public minimal_polynomial: Polynomial;
    public splitting_field: FieldExtension;
    public automorphisms: TEX[];

    constructor({
        minimal_polynomial, 
        splitting_field, 
        automorphisms
    }: {
        minimal_polynomial: Polynomial, 
        splitting_field: FieldExtension, 
        automorphisms: TEX[]
    }) {
        this.minimal_polynomial = minimal_polynomial;
        this.splitting_field = splitting_field;
        this.automorphisms = automorphisms;
    }

    public get declaration(): TEX {
        return `\\text{Gal}(\\ ${this.splitting_field.declaration} \\ / \\ ${this.minimal_polynomial.field.declaration} \\ )` as TEX;
    }

    static make_automorphism(number: number, expression: TEX): TEX {
        return `\\sigma_${number}(x) = ${expression}` as TEX;
    }
}