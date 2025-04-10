import * as T from "$lib/tex";

const domain_properties_preface = new T.Inline([
    `A "domain" is defined as a non-trivial ring with the following properties.`
]);

const domain_properties = new T.List([
    new T.Inline([`The ring contains an identity element with respect to the  multiplication operation. In other terminologies, the ring has a multiplicative identity, or rather, the "ring" is a "unital ring".`]),
    new T.Inline([`For any two nonzero elements of the ring, their product (with respect to the multiplication operation) is also a nonzero element of the ring. In another terminology, the ring satisfies the "zero-product property". In mathematical notation, for a non-trivial ring `, new T.Tex(`\\mathcal{R}`), `, the following must hold: `, new T.Tex(`\\forall a, b \\in \\mathcal{R} a \\cdot b = 0 \\iff a = 0 \\lorb = 0`)]),
]);

const domain_property_clarification = new T.Inline([
    `Note, in order to be classified as "a domain", the multiplication operation of the ring need not be commutative.`,
])

const domain_misleading_nomenclature = new T.Inline([
    `The term "domain" is heavily misleading nomenclature. It is entirely unrelated to the mathematical term "domain of a function".`,
]);

const domain_etymology = new T.Inline([
    `Before the term or concept of "a ring" was defined, sets with a ring-like algebraic structure were being investigated. And, historically, these ring-like structures were defined as "integral domains", or "domains/regions" that were "integral" (i.e. behaved liked integers). Once the term "ring" was introduced, it was clear that integral domains were a specific type of ring. It was also clear that there existed a mathematical structure between rings and integral domains—a structure that had all the properties of a ring, but not all the properties of an "integral domain". This structure was later named a "domain".`,
]);

const domain_etymology_note = new T.Inline([
    `Note, an "integral domain" is simply a "domain" wherein the underlying ring is also commutative. (Thus, all integral domains are domains.)In other words, a "domain" can be thought of as a "non-commutative integral domain", or alternatively, an "integral domain" can be thought of as a "commutative domain", although these two terminologies are rarely used.`,
]);

const domain_example = new T.Inline([
    `Most commonly encountered domains are also integral domains. However, if we attempt to choose a domain that is not an integral domain, then the quintessential example is the quaternions, as they are both non-commutative and satisfy the zero-product property.`
]);

const domain_counterexample = new T.Inline([
    `The quintessential counterexample of a "domain" (and also an "integral domain") is the ring of integers modulo 6, `, new T.Tex(`\\mathbb{Z}/6\\mathbb{Z}`), `. This is because `, new T.Tex(`2 \\cdot 3 = 0 \\text{ (mod 6)}`), `, which violates the zero-product property required for a ring to be a domain.`,
]);