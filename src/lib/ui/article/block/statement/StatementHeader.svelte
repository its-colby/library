<script lang="ts">
    import type { Statement } from "$lib/math";
    import katex from "katex";
    import 'katex/dist/katex.min.css';

    let { data, multiple_statements } = $props<{ data: Statement, multiple_statements: boolean }>();

    let expression = katex.renderToString(data.primary.value.value, { throwOnError: false });

    let label = katex.renderToString(data.primary.label.value, { throwOnError: false });
</script>

<div>
    <span 
        class="expression" 
        class:multiple-statements={multiple_statements}
        class:has-children={data.has_secondaries}
    >
        {@html expression}
    </span>
    {#if multiple_statements}
        <span class="label">
            {@html label}
        </span>
    {/if}
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