// - Krull's theorem , nonzero ring

import * as T from "$lib/book";

export const chapter = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            Let $$\\mathcal{R}$$ be a nonzero ring. 
        `),
        T.Prose.parse(`
            Base Case ($$\\alpha = 0$$): Then, by definition, there exists at least one proper ideal $$I_0$$, the zero ideal $$\\langle 0 \\rangle$$. Note, the zero ideal can only be non-proper if the ring is the zero ring.
        `),
        T.Prose.parse(`
            Successor Step ($$\\alpha \\to \\alpha +1$$): Pick an element $$x$$ from $$\\mathcal{R} / I_\\alpha$$. If x does not exist, then $$I_{\\alpha}$$ is maximal. Otherwise, let $$I_{\\alpha+1} = I_\\alpha + \\langle x \\rangle$$.
        `),
        T.Prose.parse(`
            Limit Step ($$\\alpha \\to \\lambda$$): Let $$I_\\lambda = \\bigcup_{\\alpha < \\lambda} I_\\alpha$$. $$I_\\lambda$$ is a maximal ideal of $$\\mathcal{R}$$. $$I_\\lambda$$ cannot be $$\\langle 1 \\rangle$$ as this would contradict the successor step. 
        `),
    ]),

], T.Prose.parse(`Krull's Theorem`));



// change to "existence of maximal ideals"
// In a division ring, the only two-sided ideals are 0 and the whole ring.