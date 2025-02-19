import { Tex, Notation as N } from "$lib/math/tex";

export function op(operands: (string | Tex)[], index: number = 0): Tex {
    operands = operands.map(operand => Tex.get_string(operand));
    const i = index === 0 ? "" : N.subscript(index.toString());
    const op = (Tex.from_text("op")).append(i);
    return op.of(operands.join(", "));
}