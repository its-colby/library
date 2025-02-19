import { Block, Statement, Inline, Content, Tex, Title } from "$lib/math/tex";

const TITLE = new Title({
    inline: new Inline(["The Set of Algebraic Numbers", new Tex("\\enspace \\mathbb{A}")])
});

const PARAGRAPH_1 = new Inline([
    `Number theory explores the properties of various sets of numbers, such as the natural numbers `, new Tex("\\mathbb{N}"), `, integers `, new Tex("\\mathbb{Z}"), `, rational numbers `, new Tex("\\mathbb{Q}"), `, real numbers `, new Tex("\\mathbb{R}"), `, and complex numbers `, new Tex("\\mathbb{C}"), `.`
]);

const PARAGRAPH_2 = new Inline([
    `Solving univariate (single-variable) polynomial equations is one of the most fundamental aspects of mathematics. Polynomials with rational coefficients, such as `, new Tex("2x^2 + \\frac{1}{3}x - 5"), `, are common, while those with irrational coefficients, like `, new Tex("\\sqrt{2}x^2 + \\pi x - 1"), `, are rare. We say a polynomial with rational coefficients is 'defined over the rationals', or equivalently, the polynomial is 'an element of `, new Tex("\\mathbb{Q}[x]"), `'. See 2.1.1 for a formal definition.`
]);

const PARAGRAPH_3 = new Inline([
    `Consider the solutions of a univariate polynomial equation with rational coefficients. These solutions are not integers or rationals, as shown by `, new Tex("x = \\sqrt{2}"), ` in `, new Tex("x^2 = 2"), `. Moreover, `, new Tex("\\pi"), ` as one mathematician proved, is never a solution, indicating these solutions are also distinct from the real and complex numbers. As a result, we call this distinct set of numbers, the algebraic numbers, denoted as `, new Tex("\\mathbb{A}"), `. See 2.1.2 for a formal definition.`
]);

const PARAGRAPH_4 = new Inline([
    `When set to 0, any polynomial in `, new Tex("\\mathbb{Q}[x]"), ` can be transformed to a polynomial in `, new Tex("\\mathbb{Z}[x]"), `. Simply multiply both sides by the least common multiple of the denominators of the coefficients. See 2.1.3 for an example. Thus, the definition in 2.1.2 simplifies to 2.1.4.`
]);

namespace Block_1 {
    const Q_X = 
    `
        \\mathbb{Q}[x] = \\{ \\enspace 
            a_nx^n + \\cdots + a_1x + a_0
            \\enspace \\mid \\enspace 
            a_i \\in \\mathbb{Q}
        \\enspace \\}
    `;

    const WITH_Q_X = 
    `
        \\mathbb{A} = \\{ \\enspace 
            \\alpha \\in \\mathbb{C} 
            \\enspace \\mid \\enspace  
            \\exists f \\in \\mathbb{Q}[x]
            \\enspace , \\enspace 
            f(\\alpha) = 0
        \\enspace \\}
    `;

    const Q_X_TO_Z_X = 
    `
        \\frac{3}{4}x^3 + \\frac{2}{5}x^2 - 7
        = 0
        \\implies 
        0 \\cdot 20 = 15x^3 + 8x^2 - 140
    `;

    const WITH_Z_X = 
    `
        \\mathbb{A} = \\{ \\enspace 
            \\alpha \\in \\mathbb{C} 
            \\enspace \\mid \\enspace  
            \\exists f \\in \\mathbb{Z}[x]
            \\enspace , \\enspace 
            f(\\alpha) = 0
        \\enspace \\}
    `;

    export const BLOCK = Block.from_definition({
        title: Tex.from_text("The Algebraic Numbers"),
        statements: [
            Statement.from_single(new Tex(Q_X)),
            Statement.from_single(new Tex(WITH_Q_X)),
            Statement.from_single(new Tex(Q_X_TO_Z_X)),
            Statement.from_single(new Tex(WITH_Z_X))
        ]
    });
}

const PARAGRAPH_6 = new Inline([
    `Henceforth, the adjective 'algebraic' will denote whether or not a number is an algebraic number.`
]);

const PARAGRAPH_7 = new Inline([
    `We know from experience that `, new Tex("\\sqrt{2}"), `, `, new Tex("i"), `, and `, new Tex("9"), ` are algebraic. But what does the set of algebraic numbers look like as a whole? Are all rational numbers algebraic? Which complex numbers aren't? To answer these questions, we will examine sets of numbers we suspect to be algebraic, like the rationals and integers, and attempt to construct univariate polynomials with rational coefficients that have them as solutions. Success indicates the number is algebraic; failure indicates it is not.`
]);

const PARAGRAPH_8 = new Inline([
    `All rational numbers can be represented as a proportion of two integers. All one simply has to do is set this fraction equal to `, new Tex("x"), `, and attempt to rearrange and get 0 on one-side. This can be seen in 2.2.1 as an example, and 2.2.2 as a general statement.`
]);

const PARAGRAPH_9 = new Inline([
    `Since all integers are rational and all natural numbers are integers, these familiar sets are all subsets of the algebraic numbers, as represented in 2.2.3.`
]);

namespace Block_2 {
    const RATIONALS_ARE_ALGEBRAIC =
    `
        \\forall \\frac{a}{b} \\in \\mathbb{Q}
        \\enspace \\to \\enspace
        bx - a = 0 \\implies
        \\frac{a}{b} \\text{ is algebraic}
    `;

    const RATIONALS_EXAMPLE =
    `
        \\frac{7}{9} 
        \\enspace \\to \\enspace 
        x = \\frac{7}{9}
        \\enspace \\to \\enspace
        9x = 7
        \\enspace \\to \\enspace
        9x - 7 = 0
    `;

    const INTEGERS_ARE_ALGEBRAIC =
    `
        \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{A}
    `;

    export const BLOCK = Block.from_proof({
        title: Tex.from_text("The Rationals are Algebraic"),
        statements: [
            Statement.from_single(new Tex(RATIONALS_EXAMPLE)),
            Statement.from_single(new Tex(RATIONALS_ARE_ALGEBRAIC)),
            Statement.from_single(new Tex(INTEGERS_ARE_ALGEBRAIC))
        ]
    });
}

const PARAGRAPH_10 = new Inline([
    `Now, we will move on to roots of numbers. Lets start with the same strategy: set `, new Tex("x"), ` equal to a root of a number, and rearrange to get 0 on one-side. This can be seen in 2.3.1 as an example, and 2.3.2 as a general statement.`
]);

const PARAGRAPH_11 = new Inline([
    `As 2.3.3 shows, we don't have to stop here. We can show this for a nested root as well. Of course, we can do this arbitrarily many times. Let's formalize this into a stronger claim. Any nth degree root of an algebraic number is algebraic. In 2.3.4, we define a standard polynomial with rational coefficients, thus its root is algebraic by definition. Then, in 2.3.5, we construct another polynomial whose variables are all exponentially scaled versions of the original polynomial's variables. Lastly, we show that the root of the new polynomial is also algebraic in 2.3.6.`
]);

export namespace Block_3 {

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

    export const BLOCK = Block.from_proof({
        title: Tex.from_text("Roots of Algebraic Numbers are Algebraic"),
        statements: [
            Statement.from_single(new Tex(EXAMPLE_NTH_ROOT)),
            Statement.from_single(new Tex(GENERAL_NTH_ROOT)),
            Statement.from_single(new Tex(STRONG_PATTERN)),
            Statement.from_single(new Tex(STEP_1)),
            Statement.from_single(new Tex(STEP_2)),
            Statement.from_single(new Tex(STEP_3))
        ]
    });

}

const CONTENT = new Content([
    PARAGRAPH_1,
    PARAGRAPH_2,
    PARAGRAPH_3,
    PARAGRAPH_4,
    Block_1.BLOCK,
    PARAGRAPH_6,
    PARAGRAPH_7,
    PARAGRAPH_8,
    PARAGRAPH_9,
    Block_2.BLOCK,
    PARAGRAPH_10,
    PARAGRAPH_11,
    Block_3.BLOCK,
]);

export const THE_SET_OF_ALGEBRAIC_NUMBERS = {
    title: TITLE,
    content: CONTENT
}
