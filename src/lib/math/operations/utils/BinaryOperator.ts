import { Operator } from "./Operator";
import { Arity } from "./Arity";

export class BinaryOperator extends Operator {
    constructor({index}: {index: number}) {
        super({arity: Arity.Binary, index});
    }
}