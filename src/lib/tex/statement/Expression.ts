import { Label } from "$lib/tex/label";
import { Tex } from "$lib/tex/notation";


export class Expression {

    public readonly value: Tex;
    public label: Label;

    constructor({
        value,
        label,
    }: {
        value: Tex,
        label: Label,
    }) {
        this.value = value;
        this.label = label;
    }
}