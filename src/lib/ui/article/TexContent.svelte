<script lang="ts">
    import { Content, Block, Inline } from "$lib/math/index";
    import TexBlock from "$lib/ui/article/TexBlock.svelte";
    import TexInline from "$lib/ui/article/TexInline.svelte";

    let { content }: { content: Content } = $props();
</script>

{#each content.values as item}
    {#if item instanceof Block}
        <TexBlock block={item} />
    {:else}
        <TexInline inline={item as Inline} />
    {/if}
{/each}