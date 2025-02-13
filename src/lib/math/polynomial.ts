import { Field } from "./structures/index";
import { type TEX } from "$lib/math/tex";

export class Polynomial {
    public coefficients: number[];
    public field: Field;

    constructor({
        coefficients, 
        field
    }: {
        coefficients: number[],
        field: Field
    }) {
        this.coefficients = coefficients;
        this.field = field;
    }

    public get degree(): number {
        return this.coefficients.length - 1;
    }

    public get declaration(): TEX {
        const terms = this.coefficients.map((coefficient, index) => {
            const current_degree = this.degree - index;
            if (coefficient === 0) return '';
            const left = coefficient === 1 ? '' : Math.abs(coefficient);
            const operator = current_degree === this.degree ? 
                '' : 
                coefficient < 0 ? 
                    '-' : 
                    '+';
            const right = current_degree === 0 ? 
                '' : 
                current_degree === 1 ? 
                    'x' : 
                    `x^{${current_degree}}`;
            return `${operator}${left}${right}`;
        }).join('').concat('= 0');
        return terms as TEX;
    }
}