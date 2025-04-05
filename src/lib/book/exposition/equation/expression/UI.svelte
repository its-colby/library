<script lang="ts">
    import { Expression } from "$book/exposition/equation/expression";
    import katex from "katex";
    import 'katex/dist/katex.min.css';

    let { 
        expression, 
        has_secondaries 
    }: { 
        expression: Expression, 
        has_secondaries: boolean 
    } = $props();

    let expression_string = katex.renderToString(
        expression.tex.value, { throwOnError: false })
    ;

    let label_string = katex.renderToString(
        expression.ordinal.value.value, { throwOnError: false }
    );
</script>

<div>
    <span 
        class="expression" 
        class:has-children={has_secondaries}
    >
        {@html expression_string}
    </span>
    <span class="label">
        {@html label_string}
    </span>
</div>


<style lang="scss">
    @use "$lib/front-end/theme/screens";

    div {
        display: flex;

        @include screens.desktop {
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
        }

        @include screens.mobile {
            align-items: flex-start;
            flex-direction: column-reverse;
        }
    }

    span.expression {
        margin: 0 auto;
    }

    span.label {
        font-size: 16px;
    }

    span.expression.has-children {
        margin-left: 30px;
    }
</style>
<!-- 
div.block-container {
    display: flex;
    flex-direction: column;
    gap: 25px;

    margin-top: 40px;
    margin-bottom: 40px;

    color: var(--text-brand);
    font-size: 20px;
}

div.statements-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
} -->