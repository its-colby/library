import { Block, OneLineStatement, Inline, Section, Tex, Title } from "$lib/tex";

const PARAGRAPH_1 = new Inline([
    `Now, we will move on to roots of numbers. Lets start with the same strategy: set `, new Tex("x"), ` equal to a root of a number, and rearrange to get 0 on one-side. This can be seen in 2.3.1 as an example, and 2.3.2 as a general statement.`
]);

const PARAGRAPH_2 = new Inline([
    `As 2.3.3 shows, we don't have to stop here. We can show this for a nested root as well. Of course, we can do this arbitrarily many times. Let's formalize this into a stronger claim. Any nth degree root of an algebraic number is algebraic. In 2.3.4, we define a standard polynomial with rational coefficients, thus its root is algebraic by definition. Then, in 2.3.5, we construct another polynomial whose variables are all exponentially scaled versions of the original polynomial's variables. Lastly, we show that the root of the new polynomial is also algebraic in 2.3.6.`
]);

const EXAMPLE_NTH_ROOT =
`
    \\sqrt[3]{2} 
    \\enspace \\to \\enspace 
    x = \\sqrt[3]{2}
    \\enspace \\to \\enspace
    x^3 = 2
    \\enspace \\to \\enspace
    x^3 - 2 = 0
`;

const GENERAL_NTH_ROOT =
`
    \\forall n \\in \\mathbb{N}
    \\enspace , \\enspace
    x^n - k \\in \\mathbb{Q}[x] 
    \\implies
    \\sqrt[n]{k} \\text{ is algebraic}
`;

const STRONG_PATTERN =
`
    \\forall m, n \\in \\mathbb{N}
    \\enspace , \\enspace
    x^{mn} - k \\in \\mathbb{Q}[x] 
    \\implies
    \\sqrt[m]{\\sqrt[n]{k}} \\text{ is algebraic}
`;

const STEP_1 = 
`
    \\exists f \\in \\mathbb{Q}[x] 
    \\enspace , \\enspace
    f(x) = a_nx^n + \\cdots + a_1x + a_0
    \\enspace , \\enspace
    f(\\alpha) = 0
    \\implies
    \\alpha \\in \\mathbb{A}
`;

const STEP_2 = 
`
    \\text{Let } g(x) = f(x^k) = a_nx^{nk} + \\cdots + a_1x^k + a_0
    \\implies
    g \\in \\mathbb{Q}[x]
`;

const STEP_3 =
`
    \\text{Let } \\beta = \\sqrt[k]{\\alpha}
    \\implies
    g(\\beta) = f(\\beta^k) = f(\\alpha) = 0
    \\enspace \\therefore \\enspace
    \\beta \\in \\mathbb{A}
`;

const BLOCK = Block.from_proof({
    title: Tex.from_text("Roots of Algebraic Numbers are Algebraic"),
    statements: [
        new OneLineStatement({ value: new Tex(EXAMPLE_NTH_ROOT) }),
        new OneLineStatement({ value: new Tex(GENERAL_NTH_ROOT) }),
        new OneLineStatement({ value: new Tex(STRONG_PATTERN) }),
        new OneLineStatement({ value: new Tex(STEP_1) }),
        new OneLineStatement({ value: new Tex(STEP_2) }),
        new OneLineStatement({ value: new Tex(STEP_3) })
    ]
});

export const ROOTS_SECTION = new Section({
    title: new Title({
        inline: new Inline([
            "The Roots of Algebraic Numbers are Algebraic",
        ]),
    }),
    content: [
        PARAGRAPH_1,
        PARAGRAPH_2,
        BLOCK
    ]
})