import { Block, Statement, Tex } from "$lib/math/tex";

const DEFINITION =
`
    \\text{Given an identity element } i, \\text{ for all } a \\text{ there exists } b \\text{ such that } a \\cdot b = i
`

export const EXISTENCE_OF_INVERSES = Block.from_definition({
    title: Tex.from_text("Existence of Inverses"),
    statements: [
        Statement.from_single(new Tex(DEFINITION))
    ]
});
