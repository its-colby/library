import { type TEX, Notation as N } from "$lib/math/tex";

export function op(operands: string[], index: number = 0): TEX {
    const i = index === 0 ? "" : N.sub(index.toString());
    return `
        ${N.text("op", false)}
        ${i}
        (${operands.join(", ")})
    ` as TEX;
}