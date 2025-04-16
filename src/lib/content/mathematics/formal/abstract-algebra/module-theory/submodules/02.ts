import * as T from "$book";

export const chapter_2 = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Let $$R$$ be a ring considered as an $$R$$-module (where module multiplication is just ring multiplication).
        `),
        T.Prose.parse(`
            Let $$I$$ be an ideal of $$R$$. We will show $$I$$ is an $$R$$-submodule by verifying the submodule axioms:
        `),
        T.Prose.parse(`
            1. $$I$$ is closed under addition since it's an ideal
            2. $$I$$ is closed under negation since it's an ideal
        `),
        T.Prose.parse(`
            For scalar multiplication, let $$r \\in R$$ and $$i \\in I$$. Then $$r \\cdot i$$ (as module multiplication) is the same as $$ri$$ (ring multiplication).
            Since $$I$$ is an ideal, $$ri \\in I$$.
        `),
        T.Prose.parse(`
            Conversely, if $$M$$ is an $$R$$-submodule of $$R$$, then:
            1. $$M$$ is closed under addition
            2. For any $$r \\in R$$ and $$m \\in M$$, $$rm \\in M$$ (by module scalar multiplication)
            These are exactly the conditions for $$M$$ to be an ideal.
        `),
        T.Prose.parse(`
            Therefore, the ideals of $$R$$ exactly coincide with the $$R$$-submodules of $$R$$.
        `),
    ]),
], 
    T.Prose.parse(`Ideals as submodules`)
);