import * as T from "$book";

export const chapter = T.BookChapter.from_exposition([
    T.List.numbered([
        T.Prose.parse(`
            The dihedral group D₃ is isomorphic to the direct product of Z₃ and Z₂.
            This is a special case of a more general result about dihedral groups.
        `),
        T.Prose.parse(`
            Let's construct the isomorphism:
            
            Let Z₃ = {0, 1, 2} under addition modulo 3
            Let Z₂ = {0, 1} under addition modulo 2
            
            The direct product Z₃ × Z₂ has elements:
            {(0,0), (1,0), (2,0), (0,1), (1,1), (2,1)}
        `),
        T.Prose.parse(`
            Define the isomorphism φ: D₃ → Z₃ × Z₂ as follows:
            
            For rotations:
            - φ(r₀) = (0,0)
            - φ(r₁) = (1,0)
            - φ(r₂) = (2,0)
            
            For reflections:
            - φ(s₀) = (0,1)
            - φ(s₁) = (1,1)
            - φ(s₂) = (2,1)
        `),
        T.Prose.parse(`
            Verification of the isomorphism:
            
            1. φ is bijective (one-to-one and onto)
            2. φ preserves the group operation:
               - φ(r₁ ∘ r₂) = φ(r₀) = (0,0) = (1+2,0+0) = φ(r₁) + φ(r₂)
               - φ(s₀ ∘ r₁) = φ(s₁) = (1,1) = (0+1,1+0) = φ(s₀) + φ(r₁)
               - φ(s₀ ∘ s₀) = φ(r₀) = (0,0) = (0+0,1+1) = φ(s₀) + φ(s₀)
        `),
        T.Prose.parse(`
            This isomorphism is special to D₃ and doesn't hold for other dihedral groups.
            For example, D₄ is not isomorphic to Z₄ × Z₂ because:
            1. D₄ is non-abelian
            2. Z₄ × Z₂ is abelian
            3. Non-abelian groups cannot be isomorphic to abelian groups
        `),
    ]),
], 
    T.Prose.parse(`D₃ ≅ Z₃ × Z₂: A Special Case`)
); 