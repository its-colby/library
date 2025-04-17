import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            The quaternion group Q₈ is a non-abelian group of order 8 with elements:
            $$Q_8 = \\{1, -1, i, -i, j, -j, k, -k\\}$$
            
            The group operation is defined by:
            $$i^2 = j^2 = k^2 = -1$$
            $$ij = k, jk = i, ki = j$$
            $$ji = -k, kj = -i, ik = -j$$
        `),
        T.Prose.parse(`
            Proof of Conjugacy Classes

            1. Center Identification:
               - The center $$Z(Q_8)$$ consists of elements that commute with all other elements
               - $$1$$ is in the center by definition of identity
               - $$-1$$ is in the center because $$(-1)g = g(-1) = -g$$ for any $$g \\in Q_8$$
               - No other elements commute with everything (e.g., $$ij = k \\neq -k = ji$$)
               - Therefore, $$Z(Q_8) = \\{1, -1\\}$$

            2. Center Conjugacy Classes:
               - Since the center is abelian, each element forms its own conjugacy class
               - This gives us two singleton classes: $$\\{1\\}$$ and $$\\{-1\\}$$

            3. Quotient Group Analysis:
               - $$Q_8/Z(Q_8)$$ has order 4 and is abelian (all groups of order 4 are abelian)
               - This implies that all conjugacy classes outside the center must have size 2
               - The remaining 6 elements must be partitioned into three pairs

            4. Pairing Elements:
               - For any $$g \\in Q_8$$, $$g$$ and $$g^{-1}$$ must be in the same conjugacy class
               - This gives the natural pairing: $$\\{i, -i\\}$$, $$\\{j, -j\\}$$, $$\\{k, -k\\}$$
        `),
        T.Prose.parse(`
            Verification of Conjugacy Classes

            The conjugacy classes of Q₈ are:
            
            1. $$\\{1\\}$$ (the identity)
            2. $$\\{-1\\}$$ (the center)
            3. $$\\{i, -i\\}$$ (conjugate pair)
            4. $$\\{j, -j\\}$$ (conjugate pair)
            5. $$\\{k, -k\\}$$ (conjugate pair)

            Verification of conjugacy relations:

            For the pair $$\\{i, -i\\}$$:
            $$jij^{-1} = jij = j(-k) = -i$$
            $$kik^{-1} = kik = k(j) = -i$$
            
            For the pair $$\\{j, -j\\}$$:
            $$iji^{-1} = iji = i(k) = -j$$
            $$kjk^{-1} = kjk = k(-i) = -j$$
            
            For the pair $$\\{k, -k\\}$$:
            $$iki^{-1} = iki = i(-j) = -k$$
            $$jkj^{-1} = jkj = j(i) = -k$$

            The class equation is:
            $$8 = 1 + 1 + 2 + 2 + 2$$
        `),
    ]),
], 
    T.Prose.parse(`Conjugacy Classes of the Quaternion Group Q₈`)
); 