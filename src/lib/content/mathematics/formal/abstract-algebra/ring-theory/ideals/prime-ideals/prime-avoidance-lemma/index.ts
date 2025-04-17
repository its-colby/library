import * as T from "$book";

export const prime_avoidance_lemma = T.Exposition.from([
    T.Prose.parse(`
        The Prime Avoidance Lemma states: Let $$P_1, P_2, ..., P_n$$ be prime ideals in a ring $$R$$, and let $$I$$ be an ideal of $$R$$. If $$I \\subseteq \\bigcup_{i=1}^n P_i$$, then $$I \\subseteq P_j$$ for some $$j$$.
    `),
    T.List.numbered([
        T.Prose.parse(`
            First, we prove the case for $$n = 2$$. Let $$I \\subseteq P_1 \\cup P_2$$. Suppose $$I \\not\\subseteq P_1$$ and $$I \\not\\subseteq P_2$$. Then there exist $$a \\in I \\setminus P_1$$ and $$b \\in I \\setminus P_2$$. Since $$a,b \\in I \\subseteq P_1 \\cup P_2$$, we must have $$a \\in P_2$$ and $$b \\in P_1$$.
        `),
        T.Prose.parse(`
            Consider $$a + b \\in I$$. Since $$a \\notin P_1$$ and $$b \\in P_1$$, we have $$a + b \\notin P_1$$ (as $$P_1$$ is prime). Similarly, $$a + b \\notin P_2$$. But this contradicts $$I \\subseteq P_1 \\cup P_2$$.
        `),
        T.Prose.parse(`
            For $$n > 2$$, we proceed by induction. Assume the lemma holds for fewer than $$n$$ prime ideals. Let $$I \\subseteq \\bigcup_{i=1}^n P_i$$. If $$I \\subseteq \\bigcup_{i=1}^{n-1} P_i$$, we're done by induction.
        `),
        T.Prose.parse(`
            Otherwise, there exists $$x \\in I$$ with $$x \\in P_n$$ but $$x \\notin P_i$$ for $$i < n$$. For any $$y \\in I$$, consider $$y - ax$$ for $$a \\in R$$. If $$y \\notin P_n$$, we can choose $$a$$ so that $$y - ax \\notin \\bigcup_{i=1}^n P_i$$, contradicting our assumption.
        `),
        T.Prose.parse(`
            Therefore, $$I \\subseteq P_n$$, completing the proof.
        `),
    ]),
    T.List.numbered([
        T.Prose.parse(`
            Key applications of the Prime Avoidance Lemma:
        `),
        T.Prose.parse(`
            1. If an ideal is contained in a finite union of ideals, it must be contained in one of them
        `),
        T.Prose.parse(`
            2. The lemma holds even if only two of the ideals are prime
        `),
        T.Prose.parse(`
            3. The result fails for infinite unions of prime ideals
        `),
        T.Prose.parse(`
            4. Used in proving properties of primary decompositions
        `),
    ]),
],
    T.Prose.parse(`Proof of the Prime Avoidance Lemma`)
);