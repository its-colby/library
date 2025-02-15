<script lang="ts">
    import { Block, Statement, Expression } from '$lib/math/tex';
    import katex from 'katex';
    import 'katex/dist/katex.min.css';
    import BlockHeader from '$lib/ui/article/block/BlockHeader.svelte';

    let { block } : {block: Block} = $props();
</script>

{#snippet statement_children(items: Expression[])}
    <div class="statement-children-container">
        {#each items as item, index}
            <div class="statement-child-container">
                <span class="statement-child-number">
                    {@html katex.renderToString(item.label.value, { throwOnError: false })}
                </span>
                <span class="statement-child">
                    {@html katex.renderToString(item.value.value, { throwOnError: false })}
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
            class:has-children={data.has_secondaries}
        >
            {@html katex.renderToString(data.primary.value.value, { throwOnError: false })}
        </span>
        {#if multiple_statements}
            <span class="statement-header-number">
                {@html katex.renderToString(data.primary.label.value, { throwOnError: false })}
            </span>
        {/if}
    </div>
{/snippet}

{#snippet statement(data: Statement, multiple_statements: boolean)}
    <div class="statement-container">
        {@render statement_header(data, multiple_statements)}
        {#if data.has_secondaries}
            {@render statement_children(data.secondaries.value)}
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

<div class="block-container">
    {#if block.has_header}
        <BlockHeader header={block.header.value} />
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

