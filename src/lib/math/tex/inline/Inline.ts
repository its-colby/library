import { Tex } from "$lib/math/tex/notation";

type TextOrTex = string | Tex;

export class Inline {
    public readonly value: TextOrTex[];

    constructor({ value }: { value: TextOrTex[] }) {
        this.value = value;
    }
}