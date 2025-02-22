import { Inline, Section, Block, Tex, Title } from "$lib/tex";

const P1 = new Inline([
    `Functions, like univarite or multivariate (single or multiple variable) polynomials, or sine and cosine, map a set of inputs to an output. Specifically, a function maps a set of inputs to a particular output. Operations (like addition and multiplication) meet this definition as well: they map a set of inputs to a particular output. However, there is an important distinction between functions and operations. An operation, by definition, should have inputs and outputs that are of the same set.`,
]);

const P2 = new Inline([`
    For example, on the set of integers, we can consider addition, multiplication, and subtraction to all be operations, as they will always return intgers when their input is integers.`
])

const P3 = Block.from_multiple_statements([
    new Tex(`\\text{addition}(4, 5) = 4 + 5 = 9`),
    new Tex(`\\text{multiplication}(4, 5) = 4 \\cdot 5 = 20`),
    new Tex(`\\text{subtraction}(4, 5) = 4 - 5 = -1`),
]);

const P4 = new Inline([
    `However, division would not be classified as an operation on the set of integers, as its output will sometimes return rational numbers.`
]);

const P5 = Block.from_single_statement(
    new Tex(`\\text{division}(4, 5) = 4 \\div 5 = \\frac{4}{5} \\enspace \\notin \\mathbb{Z}`)
);

const P6 = new Inline([
    `Additionally, subtraction would not be classified as an operation on the natural numbers, as its output will sometimes return negative numbers.`
]);

const P7 = Block.from_single_statement(
    new Tex(`\\text{subtraction}(4, 5) = 4 - 5 = -1 \\enspace \\notin \\mathbb{N}`)
);

const P8 = new Inline([
    `Most operations we are familiar with are binary operations, meaning they take in two inputs (called operands). However, there are unary (1 input), ternary (3 inputs), and n-ary (n inputs) operations as well. The amount of operands an operation takes in is called the arity of the operation. In mathematics, we primarily use binary and unary operations.`
]);

const P9 = Block.from_multiple_statements([
    new Tex(`\\text{addition}(4, 5) = 4 + 5 = 9 \\quad \\text{(binary)}`),
    new Tex(`\\text{absolute value}(4) = |4| = 4 \\quad \\text{(unary)}`),
    new Tex(`\\text{negation}(-4) = -(-4) = 4 \\quad \\text{(unary)}`),
    new Tex(`\\text{factorial}(4) = 4! = 24 \\quad \\text{(unary)}`),
]);

const P10 = new Inline([
    `Besides being defined by their arity, operations are also defined by their properties. For example, you can add two numbers in any order, but you cannot subtract two numbers in any order. We refer to this fact as commutativity, namely, addition is commutative while subtraction is not.`,
]);

const P11 = Block.from_multiple_statements([
    new Tex(`4 + 5 = 5 + 4`),
    new Tex(`4 - 5 \\neq 5 - 4`),
]);

const P12 = new Inline([
    `The following properties are common in mathematics and you might already be familiar with them. Since we are remaining agnostic to the actual operation (whether its multiplication, addition, etc.), we will use `, new Tex(`op`), ` to represent the name of an operation in function style syntax. Lastly some properties are defined in terms of two operations, like distribuitivty. For example, we don't typically say multiplication is distributive, we say multiplication distributes over addition. Notationally, we will use subscripts to denote different operations. Also, note that these properties are all defined for binary operations, as opposed to operations of other arities.`,
]);

const P13 = Block.from_multiple_statements([
    new Tex(`\\text{commutativity}: op(a, b) = op(b, a)`),
    new Tex(`\\text{associativity}: op(op(a, b), c) = op(a, op(b, c))`),
    new Tex(`\\text{distributivity}: op_1(a, op_2(b, c)) = op_2(op_1(a, b), op_1(a, c))`),
]);

const P14 = new Inline([
    `The other common properties are identity and inverses. These properties are a bit special because they make constraints on the set that the operation is defined on. An identity element, when taken as an input to an operation, shoudl not change the value of the other input. An inverse element, when taken as an input to an operation, should make the operation result in the identity element. `,
]);

const P15 = Block.from_multiple_statements([
    new Tex(`\\text{identity}: \\exists e \\in S \\text{ s.t. } op(a, e) = a \\text{ and } op(e, a) = a \\text{ for all } a \\in S`),
    new Tex(`\\text{inverse}: \\forall a \\in S, \\exists b \\in S \\text{ s.t. } op(a, b) = e`),
]);

const P16 = new Inline([
    `If your definition of the natural numbers includes 0, then addition over any standard set of numbers satisfies the identity property with the element 0. Multiplication satisfies it with element 1.`
]);

const P17 = Block.from_multiple_statements([
    new Tex(`\\text{addition}: 0 + a = a + 0 = a`),
    new Tex(`\\text{multiplication}: 1 \\cdot a = a \\cdot 1 = a`),
]);

const P18 = new Inline([
    `Addition over the natural numbers does not satisfy the inverse property. There are no negative numbers so 0 will never be the result (assuming 0 is even included in the set of natural numbers to begin with). However, it does satisfy the identity property over the set of integers. `
]);

const P19 = Block.from_multiple_statements([
    new Tex(`8 + x = 0 \\implies x = -8 \\notin \\mathbb{N}`),
    new Tex(`9 + (-9) = 0 \\quad (-9) \\in \\mathbb{Z}`),
]);

const P20 = new Inline([
    `Multiplication over the integers fails the inverse property, but it does satisfy the identity property over the set of rationals.`
]);

const P21 = Block.from_multiple_statements([
    new Tex(`8 \\cdot x = 1 \\implies x = \\frac{1}{8} \\notin \\mathbb{Z}`),
    new Tex(`9 \\cdot \\frac{1}{9} = 1 \\quad \\frac{1}{9} \\in \\mathbb{Q}`),
]);

const P22 = new Inline([
    `Before concluding, we will introduce one more operation — function composition. Function composition is an operation that takes in two functions and returns a new function. The resulting function would be equivalent to executing the first function, obtaining a result, and then executing the second function. `,
])

const P23 = Block.from_multiple_statements([
    new Tex(`(f \\circ g)(x) = f(g(x))`),
    new Tex(`(f \\circ g \\circ h)(x) = f(g(h(x)))`),
])

const P24 = new Inline([
    `The properties of function composition depend on the set of functions you are working with. However, if we use the set of functions we defined previously, namely, the set of all symmetric transformations of a square, we learn that function composition, in this case has an identity element, has inverses, and is commutative.`
])

const P25 = new Inline([
    `Our identity element is the identity transformation, namely rotate 0 degrees, or do nothing. And, every element has an inverse. For example, to arrive back at a 0 degree rotation, we can rotate 90 degrees and then rotate 270 degrees, thus returning back where we started. Similary, we can flip a square vertically, and then flip it vertically again, thus returning back where we started.`,
])

const P26 = new Inline([
    `Furthermore, this function composition is associative, because the order of operations doesn't matter. If we do a and b, then c, it's the same as if we did a, then b and c.`,
])

const P27 = new Inline([
    `However, function composition is not commutative, because the order of operations does matter. If we rotate by 90 degrees (clockwise), and then flip it vertically, our original bottom right corner will be in the top left corner. However, if we flip it vertically first, and then rotate by 90 degrees (clockwise), our original bottom right corner will still be in the bottom right corner.`,
])


const P28 = new Inline([
    `In summary, operations are defiend by their arity and their properties. These properties sometimes span across multiple operations and even delimit the set that the operation is defined on.`,
]);


export const OPERATIONS = new Section({
    title: new Title({
        inline: new Inline(["Operations"]),
    }),
    content: [
        P1,
        P2,
        P3,
        P4,
        P5,
        P6,
        P7,
        P8,
        P9,
        P10,
        P11,
        P12,
        P13,
        P14,
        P15,
        P16,
        P17,
        P18,
        P19,
        P20,
        P21,
        P22,
        P23,
        P24,
        P25,
        P26,
        P27,
    ]
})




































