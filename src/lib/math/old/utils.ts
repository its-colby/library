import type { TEX } from "$lib/math/tex";

export function cdot(left: TEX, right: TEX): TEX {
    return `${left} \\ \\cdot \\ ${right}` as TEX;
}