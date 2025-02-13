import type { TEX } from "$lib/math/tex";
import { logger } from "$lib/common/logger";
import { Arity } from "./Arity";

export class Operator {
    arity: Arity;
    index: number;

    constructor({arity, index}: {arity: Arity, index: number}) {
        this.arity = arity;
        this.index = index;
    }

    operation(operands: string[]): TEX {
        const index = this.index === 0 ? "" : `_${this.index}`;
        if (operands.length !== this.arity) {
            logger.error(
                `Expected ${this.arity} operands, got ${operands.length}`
            );
            return "" as TEX;
        }
        return `\\text{op}${index}(${operands.join(", ")})` as TEX;
    }
}