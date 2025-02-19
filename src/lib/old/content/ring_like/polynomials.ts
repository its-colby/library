import { Block, Statement, Tex } from "$lib/math/tex";


const DEFINITION = 
`
    \\mathbb{Z}[x] = \\{ f(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0 \\mid a_i \\in \\mathbb{Z} , n \\geq 0 \\}
`

export const UNIVARIATE_INTEGER_POLYNOMIALS = Block.from_definition({
    title: Tex.from_text("The Univariate Integer Polynomials"),
    statements: [
        Statement.from_single(new Tex(DEFINITION))
    ]
});