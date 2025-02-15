import { Block, Statement, Tex } from "$lib/math/tex";

const DEFINITION = 
`
    \\mathcal{O}_K = \\{ a \\in K \\mid \\exists f \\in \\mathbb{Z}[x], \\text{f is monic and } f(a) = 0 \\}
`

const DEFINITION2 = 
`
    \\mathcal{O}_K = \\mathcal{O}_k \\cap K
`

export const ALGEBRAIC_INTEGERS_OF_K = Block.from_definition({
    title: Tex.from_text("An Algebraic Integer Ring"),
    statements: [
        Statement.from_single(new Tex(DEFINITION)),
        Statement.from_single(new Tex(DEFINITION2))
    ]
});