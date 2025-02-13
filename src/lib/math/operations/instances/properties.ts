import type { TEX } from "$lib/math/tex";
import { Property } from "../core/Property";
import { BinaryOperator } from "../utils/BinaryOperator";

const binary_operator = new BinaryOperator({index: 0});

const ab = binary_operator.operation(["a", "b"])
const ba = binary_operator.operation(["a", "b"])

const commutativity = new Property({
    name: "Commutative",
    operators: [binary_operator],
    definition: Property.equivalence(ab, ba)
});

const bc = binary_operator.operation(["b", "c"])
const a_bc = binary_operator.operation(["a", bc])
const ab_c = binary_operator.operation([ab, "c"])

const associativity = new Property({
    name: "Associative",
    operators: [binary_operator],
    definition: Property.equivalence(a_bc, ab_c)
});

const addition_operator = new BinaryOperator({index: 1});
const multiplication_operator = new BinaryOperator({index: 2});

const b_plus_c = addition_operator.operation(["b", "c"])
const a_times_b_plus_c = multiplication_operator.operation(["a", b_plus_c])
const a_times_b = multiplication_operator.operation(["a", "b"])
const a_times_c = multiplication_operator.operation(["a", "c"])
const a_times_b_plus_a_times_c = addition_operator.operation([
    a_times_b,
    a_times_c
])

const distributivity = new Property({
    name: "Distributive",
    operators: [addition_operator, multiplication_operator],
    definition: Property.equivalence(a_times_b_plus_c, a_times_b_plus_a_times_c)
});

const ai = binary_operator.operation(["a", "i"]);
const ia = binary_operator.operation(["i", "a"]);
const ai_ia = Property.equivalence(ai, ia);

const two_sided_identity = new Property({
    name: "Two-Sided Identity",
    operators: [binary_operator],
    definition: Property.equivalence(ai_ia, "a" as TEX)
});

const a_inverse = binary_operator.operation(["a", "b"]);

const existence_of_inverse = new Property({
    name: "Existence of Inverse",
    operators: [binary_operator],
    definition: `\\exists b \\mid ${a_inverse} = i \\land i \\text{ is the identity element}` as TEX
});

export const properties = {
    commutativity,
    associativity,
    distributivity,
    two_sided_identity,
    existence_of_inverse
}
