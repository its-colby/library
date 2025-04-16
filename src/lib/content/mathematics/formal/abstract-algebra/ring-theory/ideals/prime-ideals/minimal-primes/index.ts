import * as T from "$book";

export const minimal_primes = T.BookChapter.from_exposition([
    T.Prose.parse(`
        A prime ideal $$P$$ is minimal if there is no prime ideal $$Q$$ with $$\\{0\\} \\subset Q \\subset P$$. Let's identify minimal primes in various rings.
    `),
    T.List.numbered([
        T.Prose.parse(`
            In $$\\mathbb{Z}$$, the minimal prime ideals are easy to identify:
            
            1. The zero ideal $$\\{0\\}$$ is prime (as $$\\mathbb{Z}$$ is an integral domain)
            2. For any prime number $$p$$, $$\\langle p \\rangle$$ is prime
            3. $$\\{0\\}$$ is contained in every prime ideal
            4. Therefore, $$\\{0\\}$$ is the unique minimal prime ideal
        `),
        T.Prose.parse(`
            In $$\\mathbb{Z}[x]/(x^2-x)$$, let's find the minimal primes:
            
            1. First, note that $$x^2-x = x(x-1)$$ factors
            2. By the correspondence theorem, prime ideals containing $$\\langle x^2-x \\rangle$$ correspond to prime ideals of $$\\mathbb{Z}[x]$$ containing $$x^2-x$$
            3. The minimal prime ideals are:
                - $$\\langle x \\rangle/(x^2-x)$$
                - $$\\langle x-1 \\rangle/(x^2-x)$$
            4. These are minimal because:
                - They correspond to minimal factorization of $$x^2-x$$
                - Their intersection is the nilradical
                - No prime ideal can be properly contained in either
        `),
        T.Prose.parse(`
            In $$\\mathbb{Z}[x,y]/(xy)$$, the minimal primes are:
            
            1. Consider the ideal $$\\langle xy \\rangle$$
            2. The minimal prime ideals are:
                - $$\\langle x \\rangle/(xy)$$
                - $$\\langle y \\rangle/(xy)$$
            3. These are minimal because:
                - They correspond to irreducible factors of $$xy$$
                - Their intersection is the nilradical $$\\langle xy \\rangle$$
                - No prime ideal can properly contain either
            4. Any other prime ideal containing $$xy$$ must contain either $$x$$ or $$y$$
        `),
        T.Prose.parse(`
            In $$\\mathbb{Z}/12\\mathbb{Z}$$, let's identify minimal primes:
            
            1. First, note that $$12 = 2^2 \\cdot 3$$
            2. The prime ideals are:
                - $$\\langle [2]_{12} \\rangle = \\{0,2,4,6,8,10\\}$$
                - $$\\langle [3]_{12} \\rangle = \\{0,3,6,9\\}$$
            3. Both are minimal primes because:
                - No prime ideal is properly contained in either
                - Their intersection contains all nilpotent elements
                - They correspond to prime factors of 12
        `),
    ]),
    T.List.numbered([
        T.Prose.parse(`
            Key properties of minimal primes:
        `),
        T.Prose.parse(`
            1. Every ring has at least one minimal prime ideal
        `),
        T.Prose.parse(`
            2. The intersection of all minimal primes equals the nilradical
        `),
        T.Prose.parse(`
            3. In a Noetherian ring, there are only finitely many minimal primes
        `),
        T.Prose.parse(`
            4. Minimal primes correspond to irreducible components in algebraic geometry
        `),
    ]),
],
    T.Prose.parse(`Examples of Minimal Prime Ideals`)
);