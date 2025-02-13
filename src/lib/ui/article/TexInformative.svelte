<script lang="ts">
    import { Informative, Block, Paragraph } from "$lib/math/index";
    import TexBlock from "$lib/ui/article/TexBlock.svelte";
    import TexParagraph from "$lib/ui/article/TexParagraph.svelte";

    let { informative }: { informative: Informative } = $props();
</script>

{#each informative.add_type() as { item, type }}
    {#if type === "block"}
        <TexBlock block={item as Block} />
    {:else}
        <TexParagraph paragraph={item as Paragraph} />
    {/if}
{/each}