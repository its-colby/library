import * as T from "$lib/tex";


const generalization_statemnet = new T.Inline([
    `An "ideal" is a generalization of the concept "multiples of a number".`,
]);

const multiples_of_a_number = new T.Inline([
    `Recall the multiples of `, new T.Tex(`2`), `. They are mathematically defined as `, new T.Tex(`n \\cdot 2`), `, where `, new T.Tex(`n \\in \\mathbb{Z}`), `.`
]);

const multiples_of_a_polynomial = new T.Inline([
    `The concept of "multiples" extends to other kind of mathematical objects as well. For instance, there exists the concept "multiples of a polynomial". For example, the multiples of `, new T.Tex(`x^2 + 1`), ` are all polynomials of the form `, new T.Tex(`(x^2 + 1) \\cdot q(x)`), `, where `, new T.Tex(`q(x) \\in \\mathbb{R}[x]`), `.`,
]);

const multiples_generalization = new T.Inline([
    `The multiples of a mathematical object `, new T.Tex(`a`), ` within any ring `, new T.Tex(`\\mathcal{R}`), ` can always be mathematically defined as `, new T.Tex(`n \\cdot a`), `, where `, new T.Tex(`n \\in \\mathcal{R}`), ` and `, new T.Tex(`a \\in \\mathcal{R}`), `.`,
]);

const zeros_of_functions = new T.Inline([
    `The concept "ideal" is still more generalized than the concept "multiples of a mathematical object". There exists other mathematical objects that behave very similarly to the concept "multiples of a mathematical object", yet aren't multiples of a mathematical object. For instance, recall the ring of continuous functions, `, new T.Tex(`\\mathcal{C}(X)`), `. Within this ring, all functions with a zero at some point `, new T.Tex(`\\alpha \\in X`), ` are extremely similar to the concept "multiples of a mathematical object". Imagine a function `, new T.Tex(`f(x)`), ` that has a zero at `, new T.Tex(`\\alpha`), `. If you multiply any other function `, new T.Tex(`g(x)`), ` with `, new T.Tex(`f(x)`), `, the result will also have a zero at `, new T.Tex(`\\alpha`), `. Let's denote the set of functions that have a zero at `, new T.Tex(`\\alpha`), ` with the notation `, new T.Tex(`\\mathfrak{a}`), `. Note, just like the concept "multiples of a mathematical object", `, new T.Tex(`f(x) \\cdot g(x) \\in \\mathfrak{a}`), `, for all `, new T.Tex(`g(x) \\in \\mathcal{C}(X)`), `.`,
]);

const absorption_property_generalization = new T.Inline([
    `The "zeros of continuous functions at a point" and the "multiples of a mathematical object" both share the same property: "multiplicative absorption". This property is defined as follows: For a ring `, new T.Tex(`\\mathcal{R}`), `, there exists a subset of elements`, new T.Tex(`\\mathfrak{a}`), `, such that, for all elements `, new T.Tex(`r \\in \\mathcal{R}`), `, and `, new T.Tex(`a \\in \\mathfrak{a}`), `, the following must hold: `, new T.Tex(`a \\cdot r \\in \\mathfrak{a}`), `. Such a subset is called an "ideal".`,
]);

const ideal_etymology = new T.Inline([
    `Unfortunatley, the nomenclature behind the term "ideal" clearly has nothing to do with the term "multiplicative absorption". Instead, the nomenclature behind the term "ideal" comes from its original application, Dedekind domains. However, for the sake of understanding the nomenclature behind the term "ideal", it will rudimentarily be discussed now.`
]);

const note_on_dedekind_domains = new T.Inline([
    `The integers can be uniquely factored into prime numbers. If we generalize the concept of a prime number to an irreducible element (nonzero non-invertible element), then elements of other rings (beyond the integers) can also be uniquely factored into irreducible elements. And, finally, it turns out that we can generalize even further, from an irreducible element to an ideal. Rings that can be uniquely factored into ideals (but not irreducible elements) are called "Dedekind domains". Unfortunately, unlike irreducible elements, ideals are not elements of a ring, they are subsets of a ring. As a result, our definition of "factor" has to be generalized as well. Thus, the term "ideal", meaning "existing only in idea", became used to describe such subsets, as the kind of "factorization" wasn't the typical "nice" factorization of elements we are accustomed to.`,
]);

const ideals_as_non_unital_subrings = new T.Inline([
    `An ideal is no ordinary subset of a ring. A student of abstract algebra may begin to question if this subset has an algebraic structure of its own. As it turns out, the satisfication of the multiplicative absorption property implies that an ideal is a non-unital subring of a ring. We will now provide the beginning of a proof of this statement.`,
]);

const non_unital_subring_proof_setup = new T.Inline([
    `Assume an ideal `, new T.Tex(`\\mathfrak{a}`), ` of a ring `, new T.Tex(`\\mathcal{R}`), `. Let `, new T.Tex(`a`), ` be an element of `, new T.Tex(`\\mathfrak{a}`), `and `, new T.Tex(`p, q`), ` be elements of `, new T.Tex(`\\mathcal{R}`), `. Then, by the property of multiplicative absorption: `, new T.Tex(`a \\cdot p \\in \\mathfrak{a}`), `, `, new T.Tex(`a \\cdot q \\in \\mathfrak{a}`), `.`
]);

const ideals_are_closed_under_addition = new T.Inline([
    `Now, let's consider the sum of `, new T.Tex(`a \\cdot p`), ` and `, new T.Tex(`a \\cdot q`), `: `, new T.Tex(`a \\cdot p + a \\cdot q = a \\cdot (p + q)`), `. Since `, new T.Tex(`\\mathcal{R}`), `is additively closed, `, new T.Tex(`p + q \\in \\mathcal{R}`), `. Therefore, `, new T.Tex(`a \\cdot (p + q) \\in \\mathfrak{a}`), ` by the property of multiplicative absorption. Thus, for any two elements `, new T.Tex(`a \\cdot p, a \\cdot q \\in \\mathfrak{a}`), `, the sum `, new T.Tex(`a \\cdot p + a \\cdot q \\in \\mathfrak{a}`), `. This demonstrates that an ideal is closed under addition.`
]);

const non_unital_subring_proof_conclusion = new T.Inline([
    `Similarly, the other properties of a non-unital subring can be proven. Note, such a proof is a unidirectional implication, not a bidirectional implication. In other words, if there exists a non-unital subring, such a subring is not automatically an ideal. For example, the non-unital subring `, new T.Tex(`2\\mathbb{Z}`), ` is not an ideal of the ring`, new T.Tex(`\\mathbb{R}`), `.`,
]);

const ideal_notation_1 = new T.Inline([
    `Ideals are typically notated using the fraktur font. For example, we may call some ideal `, new T.Tex(`\\mathfrak{a}`), `, instead of `, new T.Tex(`a`),`.`,
]);

const ideal_notation_2 = new T.Inline([
    `Recall, some ideals are "multiples of a mathematical object(s)". Such ideals not only obey the absorption property, but they can also be defined/built by it. For example, `, new T.Tex(`2 \\cdot z , z \\in \\mathbb{Z}`), ` builds the ideal of the even integers. When such an ideal is "generated" by one or more elements, we can notate the ideal as `, new T.Tex(`\\langle a, b, \\cdots \\rangle`), `, where a and b are generators of the ideal.`,
]);


const commutativity_conventions_preface = new T.Inline([
    `In order to be classified as an "ideal", the underlying ring need not be commutative.`,
])

const commutativity_conventions = new T.List([
    new T.Inline([`If the underlying ring is non-commutative, and `, new T.Tex('a \\cdot b \\in \\mathfrak{R}'), `, then the ideal is said to be a "left ideal".`]),
    new T.Inline([`Alternatively, if the underlying ring is non-commutative, and `, new T.Tex('b \\cdot a \\in \\mathfrak{R}'), `, then the ideal is said to be a "right ideal".`]),
    new T.Inline([`If the underlying ring is non-commutative, and the ideal satisfies the left and right conditions, then the ideal is said to be a "two-sided ideal".`]),
    new T.Inline([`If the underlying ring is commutative, then we simply call the ideal an "ideal".`]),
]);


const ideal_finiteness = new T.Inline([
    `An ideal will contain infinitely many elements if the underlying ring is infinite. Similarly, an ideal will contain finitely many elements if the underlying ring is finite.`,
]);

const trivial_ideals = new T.Inline([
    `There are two trivial ideals: the "zero ideal" `, new T.Tex(`\\langle 0 \\rangle`), ` and the "unit ideal" `, new T.Tex(`\\langle 1 \\rangle`), `. The zero ideal contains only one element, the additive identity of the ring (which is usually 0). The unit ideal contains all elements of the ring.`,
]);

const proper_ideals = new T.Inline([
    `Any non-trivial ideal is referred to as a "proper ideal". And, of course any proper ideal is contained within the unit ideal. And, the zero ideal is contained within any proper ideal.`,
]);

export const INTRODUCTION = T.Section.from_content([
    generalization_statemnet,
    multiples_of_a_number,
    multiples_of_a_polynomial,
    multiples_generalization,
    zeros_of_functions,
    absorption_property_generalization,
    ideal_etymology,
    note_on_dedekind_domains,
    ideals_as_non_unital_subrings,
    non_unital_subring_proof_setup,
    ideals_are_closed_under_addition,
    non_unital_subring_proof_conclusion,
    ideal_notation_1,
    ideal_notation_2,
    commutativity_conventions_preface,
    commutativity_conventions,
    ideal_finiteness,
    trivial_ideals,
    proper_ideals,
], "Introduction");