<script lang="ts">
    import { Block, Statement, type TEX } from '$lib/math/tex';
    import katex from 'katex';
    import 'katex/dist/katex.min.css';

    let { block } : {block: Block} = $props();
</script>

{#snippet statement_children(items: TEX[])}
    <div class="statement-children-container">
        {#each items as item, index}
            <div class="statement-child-container">
                <span class="statement-child-number">
                    {@html katex.renderToString(`(\\text{${String.fromCharCode(97 + index)}})`, { throwOnError: false })}
                </span>
                <span class="statement-child">
                    {@html katex.renderToString(item, { throwOnError: false })}
                </span>
            </div>
        {/each}
    </div>
{/snippet}

{#snippet statement_header(data: Statement, multiple_statements: boolean)}
    <div class="statement-header-container">
        <span 
            class="statement-header-text" 
            class:multiple-statements={multiple_statements}
            class:has-children={data.has_children}
        >
            {@html katex.renderToString(data.header, { throwOnError: false })}
        </span>
        {#if data.has_label && multiple_statements}
            <span class="statement-header-number">
                {@html katex.renderToString(data.label.value, { throwOnError: false })}
            </span>
        {/if}
    </div>
{/snippet}

{#snippet statement(data: Statement, multiple_statements: boolean)}
    <div class="statement-container">
        {@render statement_header(data, multiple_statements)}
        {#if data.has_children}
            {@render statement_children(data.children.value)}
        {/if}
    </div>
{/snippet}

{#snippet statements(items: Statement[])}
    <div class="statements-container">
        {#each items as item}
            {@render statement(item, items.length > 1)}
        {/each}
    </div>
{/snippet}

{#snippet block_header(data: Block)}
    <div class="block-header-container">
        <span class="block-title">
            {@html katex.renderToString(data.title, { throwOnError: false })}
        </span>
        {#if data.has_number}
            <span class="block-number">
                {@html katex.renderToString(data.number, { throwOnError: false })}
            </span>
        {/if}
    </div>
{/snippet}

<div class="block-container">
    {#if block.has_header}
        {@render block_header(block)}
    {/if}
    {@render statements(block.statements)}
</div>

<style>
    div.block-container {
        display: flex;
        flex-direction: column;
        gap: 10px;

        margin-top: 20px;
        margin-bottom: 20px;

        color: var(--text-brand);
        font-size: 20px;
    }

    div.block-header-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    div.statements-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    div.statement-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    div.statement-header-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    span.statement-header-text {
        margin: 0 auto;
    }

    span.statement-header-number, span.statement-child-number {
        font-size: 16px;
    }

    span.statement-header-text.multiple-statements {
        margin-left: 30px;
    }

    span.statement-header-text.has-children {
        margin-left: 30px;
    }

    div.statement-children-container {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-left: 90px;
    }

    div.statement-child-container {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
</style>

