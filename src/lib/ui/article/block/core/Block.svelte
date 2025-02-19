<script lang="ts">
    import { Block, Statement as TS_Statement } from '$lib/math/tex';
    import BlockHeader from '$lib/ui/article/block/core/BlockHeader.svelte';
    import Statement from '$lib/ui/article/block/statement/Statement.svelte';
    let { block } : {block: Block} = $props();
</script>

{#snippet statements(items: TS_Statement[])}
    <div class="statements-container">
        {#each items as item}
            <Statement data={item} multiple_statements={items.length > 1} />
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
    }
</style>

