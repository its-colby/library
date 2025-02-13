<script lang="ts">
    import * as x from "$lib/articles/mathematics/algebraic_number_theory";
    import { title, section_title } from "$lib/ui/article/Typographies.svelte";
    import * as m from "$lib/math/index";
    import Container from "$lib/ui/article/Container.svelte";
    import SectionContainer from "$lib/ui/article/SectionContainer.svelte";
    import TexInformative from "$lib/ui/article/TexInformative.svelte";
    // () used for fields, [] used for rings
    // gothic used for ideals
    // calligraphic
    // closure - integral / algebraic
    // algebraic element - algebraic over F if root of poly with coeff in F
    // algebraic closure of F is extension of F in which every poly with coeff in F has root
    // integral element - same but with rings
    // integral closure - same with rings


    // noetherian, principal, unique factorization, dedekind, euclidean, prime, first degree prim, norms, traces, polynomial rings

    // Z[theta] is a subring (sometimes proper) of O_K all algebraic integers which is subring of Q(theta)

    // kernel, common morphisms

    // legendre symbol and quadratic characters

    // change overline to + nZ for quotient rings

    const lorem = "x ".repeat(400);
</script>

<Container>
    {@render title(x.algebraic_number_theory.title)}
    {@render section_title(x.preface_title)}
    {@render section_title(x.section_2_title)}
    <SectionContainer>
        <TexInformative informative={x.section2} />
    </SectionContainer>

</Container>

<!--     
    <p>An algebraic number is a complex number that is a root of a non-zero univariate polynomial with rational (or equivalently, integer) coefficients. A is a field, and the algebraic closure of Q in C.</p>
    <Latex expression={String.raw`\mathbb{A} = \{ \alpha \in \mathbb{C} \mid \exists f \in \mathbb{Q}[x], f(\alpha) = 0 \}` as m.TEX} />

    <p>An algebraic integer is a complex number that is a root of a non-zero monic polynomial with integer coefficients. O is a commutative ring w/ unity, and the integral closure of Z in A. Integral Domain. Not a PID/UFD. Is Dedekind. monic means Q and Z not interchangeable</p>
    <Latex expression={String.raw`\mathcal{O} = \{ \alpha \in \mathbb{C} \mid \exists f \in \mathbb{Z}[x], f \text{ is monic and }, f(\alpha) = 0 \}` as m.TEX} />
    
    <p>A transcendental number is a real or complex number that is not algebraic.</p>
    <Latex expression={String.raw`\mathbb{T} = \{ \alpha \in \mathbb{C} \mid \alpha \notin \mathbb{A} \}` as m.TEX} />
    
    <p>Algebraic number field. Not finite field extensions must be via algebraic numbers, as transcedental extensions have infinite basis.</p>
    <Latex expression={String.raw`\mathbb{K} = \{ K \mid K \text{ is a field and } [K: \mathbb{Q}] < \infty \}` as m.TEX} />
    <Latex expression={"K = \\mathbb{Q}(\\theta)" as m.TEX} />



    <p>Subring of Algebraic Number Field</p>
    <Latex expression={"\\mathbb{Z}[\\theta]" as m.TEX} />

    <p>Ring of Algebraic Integers of Algebraic Number Field. this whole mod 4 thing for quadratic fields</p>
    <Latex expression={String.raw`\mathcal{O}_K = K \cap \mathcal{O}` as m.TEX} />
    <Latex expression={String.raw`\mathcal{O}_K = \{ \alpha \in K \mid \exists f \in \mathbb{Z}[x], f \text{ is monic and }, f(\alpha) = 0 \}` as m.TEX} />
    
    <p>a domain is a ring with no non-zero zero divisors</p>
    <Latex expression={String.raw`\forall{a, b} \in R, a \neq 0, b \neq 0 \implies ab \neq 0` as m.TEX} />

    <p>a commutative ring with no zero divisors is an integral domain</p>
    
    <p>Ideals</p>
    <Latex expression={String.raw`\forall{a, b} \in I, a + b \in I, -a \in I, \forall{r \in R}, ra \in I` as m.TEX} />

    <p>Principal Ideal</p>
    <Latex expression={String.raw`\langle a \rangle = \{ ra \mid r \in R \}` as m.TEX} />

    <p>principal ideal domain (PID) = all ideals are principal</p>

    <p>Quotient Ring</p>
    <Latex expression={String.raw`R / I = \{ r + I \mid r \in R \}` as m.TEX} />
    <Latex expression={String.raw`\mathbb{Z}[\sqrt{-5}] / \langle 2 \rangle = \{ \overline{0}, \overline{1}, \overline{\sqrt{-5}}, \overline{1 + \sqrt{-5}} \}` as m.TEX} />
    <Latex expression={String.raw`\mathbb{Z}[\sqrt{-5}] / \langle 2, \sqrt{-5} \rangle = \{ \overline{0}, \overline{1} \}` as m.TEX} />


    <p>Noetherian - every ideal is finitely generated. ring of all algebraic integers is not noetherian.</p>


    <p>Euclidean Domain</p>

    <p>Prime Ideal. same as maximal? first degree prime ideal?</p>

    <p>Unique Factorization Domain (UFD): integral domain where every non-zero non-unit element can be written as a product of irreducible elements uniquely</p>
    <Latex expression={String.raw`\mathbb{Z}[\sqrt{-5}], 6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})` as m.TEX} />

    <p>Dedekind Domain</p>

    <p>Maximal Ideal: No other ideals contained between I and R</p>
    <Latex expression={String.raw`M = \langle p \rangle = p\mathbb{Z} = \{pk \mid k \in \mathbb{Z} \}` as m.TEX} />
    <Latex expression={String.raw`\langle x - a \rangle \in \mathbb{Q}[x]` as m.TEX} />
    <Latex expression={String.raw`\langle x^2 + 1 \rangle \in \mathbb{R}[x]` as m.TEX} />
    <Latex expression={String.raw`\langle 2, \sqrt{-5} \rangle \in \mathbb{Z}[\sqrt{-5}]` as m.TEX} />

    <p>Norm of element. defined by the product of all monomorphisms. How does the norm map algebraic integers in Q(theta) to Z?</p>
    <Latex expression={String.raw`N(2) \text{ in } \mathbb{Z}[\sqrt{-5}] = N(a + b\sqrt{-5}) = (a + b\sqrt{-5})(a - b\sqrt{-5}) = a^2 + 5b^2 = 4` as m.TEX} />

    <p>Norm of ideal. size of the quotient ring (only when its ring of integers)?. the norm of an ideal is equal to the absolute value of the norm of the element? if prime ideal of dedekind domain, then the norm of ideal is a power of a prime. if ideal in dedekind has norm that is prime, then ideal is prime</p>

    <p>Trace</p>

    <p>representation of first degree prime ideal</p>
     -->

<style>
    p {
        color: var(--text-neutral);
        font-size: 20px;
    }
</style>

