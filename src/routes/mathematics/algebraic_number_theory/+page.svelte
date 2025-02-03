<script>
    import katex from 'katex';
    import 'katex/dist/katex.min.css';

    let latexExpression = '\\mathfrak{O} \\enspace \\text{of} \\enspace \\mathbb{Q}(\\sqrt{d}) \\enspace \\text{when} \\enspace d \\in \\{ 10, 15, 26, 30, -5, -6, -10, -13, -14, -15, -17, -21, -22, -23, -26, -29, -30 \\}';


    
    // prove non uniqueness by proving factors arent asssociates
    // the ring of alg int cant factor into irreducibles -non noetherian
    // proper vs trivial factors
    // x is irreducible if and only if every divisor of x is a unit or associate
    let renderedLatex = katex.renderToString(latexExpression, {
        throwOnError: false
    });

    // examples where factorization doesn't apply
    // examples where it does
    // generalize terms and definitions, likely introducing norm/trace
    // abstract to ideals
    // now apply to elementary number theory
    // appendix for random properties of various rings/fields/etc
</script>

<main>
    <h1>Algebraic Number Theory</h1>
    <div>
        <p>
            Factorization into irreducibles is not unique in the following cases (and maybe more values of d):
        </p>
        {@html renderedLatex}
    </div>
</main>

<style>
    main {
        padding-left: 100px;
        padding-right: 100px;
    }

    h1 {
        color: var(--text-neutral);
        font-size: 2rem;
    }

    div {
        color: var(--text-contrast);
        font-size: 1.5rem;
    }
</style>

