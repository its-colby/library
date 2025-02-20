<script lang="ts">
    import { Expression, Label } from "$lib/tex";
    import katex from "katex";
    import 'katex/dist/katex.min.css';

    let { expression, multiple_statements, has_secondaries } = $props<{ expression: Expression, multiple_statements: boolean, has_secondaries: boolean }>();

    let expression_string = katex.renderToString(expression.value.value, { throwOnError: false });

    let label_string = katex.renderToString(expression.label.label().value, { throwOnError: false });
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


<style>
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    span.expression {
        margin: 0 auto;
    }

    span.label {
        font-size: 16px;
    }

    span.expression.multiple-statements {
        margin-left: 30px;
    }

    span.expression.has-children {
        margin-left: 30px;
    }
</style>