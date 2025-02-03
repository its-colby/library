<script>
    import katex from 'katex';
    import 'katex/dist/katex.min.css';

    let latexExpression = '\\frac{a}{b}';

    let renderedLatex = katex.renderToString(latexExpression, {
        throwOnError: false
    });
</script>

<main>
    <h1>Diophantine Equations</h1>
    <div>
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

