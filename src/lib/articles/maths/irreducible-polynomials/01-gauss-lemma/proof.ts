import { Block, Inline, OneLineStatement, MultiLineStatement, Section, Tex, Title, List, Note } from "$lib/tex";

// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// Gauss's Lemma

const prerequisite_concepts_overview = new Inline([
    `In order to understand the most general-form of Gauss's Lemma, the following mathematical concepts must be understood.`
]);

const prerequisite_concepts = new List([
    new Inline([`Unital Commutative Rings`]),
    new Inline([`Integral Domains`]),
    new Inline([`Greatest Common Divisor (GCD) Domains. And, to understand this, integral domains, ideals, and principal ideals must be understood.`]),
    new Inline([`Unique Factorization Domains (UFDs). And, to understand this, units and irreducible elements must be understood.`]),
]);


const integral_domain_definition = new Inline([
    `An integral domain is a unital commutative ring that has no non-zero zero divisors. Equivalently, two elements must always multiply to a non-zero element, unless one of the elements is zero.`,
]);

const domain_overview = new Note(
    [
        new Inline([`A "ring" is defined by its operations and the properties of those operations. We add adjectives like "unital" and "commutative" to impose further restrictions on such operations.`]),
        new Inline([`When we want to impose restrictions on the structure of the ring's elements, and not its operations, we use adjectives followed by the term "domain".`]),
        new Inline([`For example, an "integral domain" is a ring (technically, a unital commutative ring) that behaves like the integers (a.k.a. integral). Of course, the integers have more structure than integral domains, but this is where the term "integral" comes from.`])
    ],
    `A Note on the term "Domain"`
);

const gcd_domain_definition = new Inline([
    `A gcd domain is an integral domain that has the property that the greatest common divisor of any two elements is also an element of the ring.`,
]);

const defining_a_gcd_domain = new Inline([
    `A commutative ring `, new Tex(`\\mathcal{R}`), ` is called a gcd domain if it is a unique factorization domain and if the gcd of any two elements is also an element of the ring. an integral domain is a nonzero commutative ring in which the product of any two nonzero elements is nonzero.`,
])



const defining_a_unit = new Inline([
    `A unit `, new Tex(`u`), ` of a ring, `, new Tex(`\\mathcal{R}`), `, is simply any element of the ring that has an inverse with respect to the ring's multiplication/distributive operation. In other words, for any unit `, new Tex(`u`), `, there exists a `, new Tex(`v`), `, such that `, new Tex(`u \\cdot v = e`), `, where `, new Tex(`e`), ` is the multiplicative identity of the ring.`,
]);

const examples_of_units = Block.from_multiple_statements([
    new Tex(`\\pm 1 \\text{ in } \\mathbb{Z}`),
    new Tex(`\\pm 1, \\  \\pm i \\text{ in } \\mathbb{Z}[i]`),
    new Tex(`1, 3, 5, 7 \\text{ in } \\mathbb{Z}/8\\mathbb{Z}`),
    new Tex(`\\text{all elements in } \\mathbb{Q}`),
]);

// z/6z not integral domain
// integral (behaves like integers)
// UFD is gcd which is integral
// z[rt -5 ] is integral but not gcd?
// 


const defining_p = new Inline([
    `Assume the existence of a multivariate polynomial `, new Tex(`p`), `, where `, new Tex(`p = f(x_1, \\ldots, x_n)`), `. Refer to the following to see examples of such polynomials.`
]);

const specifying_the_UFD_of_p = new Inline([
    `Assume the existence of a unique factorization domain `, new Tex(`\\mathbb{D}`), `. Let the coefficients of the polynomial `, new Tex(`p`), ` be members of `, new Tex(`\\mathbb{D}`), `. In other words, let `, new Tex(`p`), ` be a member of the unique factorization domain of polynomials `, new Tex(`\\mathcal{D}`), `, where `, new Tex(`\\mathcal{D} = \\mathbb{D}[x_1, \\ldots, x_n]`), `.`
]);

const specifying_the_content_of_p = new Inline([
    `Assume the polynomial `, new Tex(`p`), ` is a primitive polynomial. In other terminology, assume the content of `, new Tex(`p`), `, `, new Tex(`\\text{cont}(p)`), `, is a unit of `, new Tex(`\\mathbb{D}`), `.`
]);

const examples_of_p_text = new Inline([
    `Let's view some correct and erroneous instances of such a polynomial `, new Tex(`p`), `. Correct instances will be denoted as `, new Tex(`p_c`), `, and erroneous instances will be denoted as `, new Tex(`p_e`), `. Note, for readability, the terms `, new Tex(`a`), `, `,  new Tex(`b`), `, `, new Tex(`c`), `, etc. will be used to represent the variables, as opposed to the terms `, new Tex(`x_1`), `, `, new Tex(`x_2`), `, `, new Tex(`x_3`), `, etc. `
]);

const gaussian_integers_text = new Inline([
    `Let the unique factorization domain `, new Tex(`\\mathbb{D}`), ` be the ring of Gaussian integers, `, new Tex(`\\mathbb{Z}[i]`), `. In other words, let `, new Tex(`\\mathcal{D} = \\mathbb{Z}[i][a, b]`), `.`,
]);

const gaussian_integers_correct_example_unit_1 = Block.from_multiple_statements([
    new Tex(`p_c = (1 + i)a^2 + (2 - i)ab + (3)b^2`),
    new Tex(`1 + i, \\enspace 2 - i, \\enspace 3 \\enspace  \\in \\mathbb{Z}[i]`),
    new Tex(`\\text{cont}(p_c) = \\text{gcd}(1 + i, 2 - i, 3) = 1`),
]);

const gaussian_integers_correct_example_unit_i = Block.from_multiple_statements([
    new Tex(`p_c = (i)a^2 + (2i)ab + (3i)b^2 + 8i`),
    new Tex(`i, \\enspace 2i, \\enspace 3i, \\enspace 8i \\enspace  \\in \\mathbb{Z}[i]`),
    new Tex(`\\text{cont}(p_c) = \\text{gcd}(i, 2i, 3i, 8i) = i`),
]);

const gaussian_integers_incorrect_example = Block.from_multiple_statements([
    new Tex(`p_e = (2 + i)a^2 + (4 + 2i)ab + (6 + 3i)b^2`),
    new Tex(`2 + i, \\enspace 4 + 2i, \\enspace 6 + 3i \\enspace  \\in \\mathbb{Z}[i]`),
    new Tex(`\\text{cont}(p_e) = \\text{gcd}(2 + i, 4 + 2i, 6 + 3i) = 2 + i`),
]);




export const PROOF = new Section({
    title: new Title({
        value: "Proof",
    }),
    content: [
        defining_a_unit,
        examples_of_units,
        defining_p,
        specifying_the_UFD_of_p,
        specifying_the_content_of_p,
        examples_of_p_text,
        gaussian_integers_text,
        gaussian_integers_correct_example_unit_1,
        gaussian_integers_correct_example_unit_i,
        gaussian_integers_incorrect_example,
    ]
})


// The "content" 


// the product of two primitive polynomials is primitive
// A polynomial with integer coefficients is primitive if it has 1 as a greatest common divisor of its coefficients.
// a primitive polynomial has the same complete factorization over the integers and over the rational numbers.
// There the content c(P) of a polynomial P can be defined as the greatest common divisor of the coefficients of P (like the gcd, the content is actually a set of associate elements).
//  A polynomial P with coefficients in a UFD R is then said to be primitive if the only elements of R that divide all coefficients of P at once are the invertible elements of R; i.e., the gcd of the coefficients is one.
// 