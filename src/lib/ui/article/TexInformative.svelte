<script lang="ts">
    import { Informative, Block, Paragraph } from "$lib/math/index";
    import TexBlock from "$lib/ui/article/TexBlock.svelte";
    import TexParagraph from "$lib/ui/article/TexParagraph.svelte";

    let { informative }: { informative: Informative } = $props();
</script>

{#each informative.content as item}
    {#if item instanceof Block}
        <TexBlock block={item} />
    {:else}
        <TexParagraph paragraph={item as Paragraph} />
    {/if}
{/each}