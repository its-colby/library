<script lang="ts">
    import { Block } from '$lib/math/tex/index';
    import katex from 'katex';
    import 'katex/dist/katex.min.css';

    let { block } : {block: Block} = $props();

    let title = katex.renderToString(block.title, {
        throwOnError: false
    });

    let number = katex.renderToString(block.number, {
        throwOnError: false
    });

    let expressions = block.expressions.map((expression, index) => ({
        expression: katex.renderToString(expression, { throwOnError: false }),
        number: katex.renderToString(`(${index + 1})`, { throwOnError: false })
    }));

</script>

<div class="container">
    <div class="label">
        <span class="title">
            {@html title}
        </span>
        <span class="number">
            {@html number}
        </span>
    </div>
    <div class="expressions">
        {#each expressions as expression}
            <div class="expression" class:single={block.expressions.length === 1}>
                <span class="expression">
                    {@html expression.expression}
                </span>
                {#if block.expressions.length > 1}
                    <span class="expression-number">
                        {@html expression.number}
                    </span>
                {/if}
            </div>
        {/each}
    </div>
</div>

<style>
    div.container {
        display: flex;
        flex-direction: column;
        gap: 10px;

        margin-top: 20px;
        margin-bottom: 20px;

        color: var(--text-brand);
        font-size: 20px;
    }

    div.label {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    div.expressions {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    div.expression {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    div.expression.single {
        margin: 0 auto;
    }

    div.expression:not(.single) {
        margin: 0;
    }

    div.expression:not(.single) > span.expression {
        margin-left: 30px;
    }

    span.expression-number {
        font-size: 16px;
    }
</style>

