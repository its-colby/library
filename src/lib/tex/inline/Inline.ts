import { Tex } from "$lib/tex/notation";

type TextOrTex = string | Tex;

export class Inline {
    public readonly value: TextOrTex[];

    constructor(value: TextOrTex[]) {
        this.value = value;
    }

    public to_string(): string {
        return this.value.map((v) => v instanceof Tex ? "" : v).join("");
    }
}