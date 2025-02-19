<script lang="ts">
    import { Content, Block, Inline } from "$lib/math/index";
    import TexBlock from "$lib/ui/article/block/core/Block.svelte";
    import TexInline from "$lib/ui/article/inline/Inline.svelte";

    let { content }: { content: Content } = $props();
</script>

{#each content.values as item}
    {#if item instanceof Block}
        <TexBlock block={item} />
    {:else}
    <div>
        <TexInline inline={item as Inline} --tex-color="var(--text-brand)" />
    </div>
    {/if}
{/each}

<style>
    div {
        margin-bottom: 20px;
    }
</style>