<script lang="ts">
    import katex from "katex";
    import 'katex/dist/katex.min.css';
    import { Expression } from "$book/exposition/equation/expression";

    let { items } : {items: Expression[]} = $props();

    let sub_expressions = items.map((item, index) => {
        return {
            label: katex.renderToString(
                `(${(index + 1).toString()})`, { throwOnError: false }
            ),
            expression: katex.renderToString(
                item.tex.value, { throwOnError: false }
            )
        }
    });
</script>


<div class="all-sub-expressions">
    {#each sub_expressions as sub_expression}
        <div class="sub-expression-container">
            <span class="sub-expression-label">
                {@html sub_expression.label}
            </span>
            <span class="sub-expression">
                {@html sub_expression.expression}
            </span>
        </div>
    {/each}
</div>


<style>
    span.sub-expression-label {
        font-size: 16px;
        vertical-align: middle;
    }

    div.all-sub-expressions {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-left: 90px;
    }

    div.sub-expression-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }
</style>