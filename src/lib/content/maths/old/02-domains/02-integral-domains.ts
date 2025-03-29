import * as T from "$lib/tex";
import { Tex } from "$lib/tex";

const integral_domain_properties_preface = new T.Inline([
    `An "integral domain" is defined as a non-trivial "ring" with the following properties.`
]);

const integral_domain_properties = new T.List([
    new T.Inline([`The ring contains an identity element with respect to the  multiplication operation. In other terminologies, the ring has a multiplicative identity, or rather, the "ring" is a "unital ring".`]),
    new T.Inline([`The multiplication operation is commutative. In another terminology, the "ring" is a "commutative ring".`]),
    new T.Inline([`For any two nonzero elements of the ring, their product (with respect to the multiplication operation) is also a nonzero element of the ring. In another terminology, the ring satisfies the "zero-product property". In mathematical notation, for a non-trivial ring `, new T.Tex(`\\mathcal{R}`), `, the following must hold: `, new T.Tex(`\\forall a, b \\in \\mathcal{R} a \\cdot b = 0 \\iff a = 0 \\lorb = 0`)]),
]);

const integral_domain_independence_of_properties = new T.Inline([
    `Each of these properties are independent of one another. A simple example would be the "non-unital commutative ring" (with no nonzero zero divisors) `, new Tex(`2\\mathbb{Z}`), `, also known as the "even integers". `, new T.Tex(`2\\mathbb{Z}`), ` does not contain the multiplicative identity `, new Tex(`1`), `, but satisfies the other two properties. Another simple example would be the "unital commutative ring" (with non-zero zero divisors) `, new Tex(`\\mathbb{Z}/6\\mathbb{Z}`), `, also known as the "integers modulo 6". `, new Tex(`\\mathbb{Z}/6\\mathbb{Z}`), ` is a unital commutative ring, but it has non-zero zero divisors because `, new Tex(`2 \\cdot 3 = 0 \\text{ (mod 6)}`), `. `
]);

const integral_domain_nomenclature = new T.Inline([
    `The term "integral" is used because these properties are analogous to some of the essential properties of the "integers". The term "domain" is used because the "no non-zero zero divisors" property is not a restriction associated with an "operation", but rather the set itself. And, it is customary to use the term "domain" whenever we want to impose restrictions on a ring beyond the adjectives "commutative" and "unital".`
]);