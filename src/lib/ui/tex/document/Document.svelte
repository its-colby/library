<script lang="ts">
    import { Section, Block as TS_Block, Inline as TS_Inline } from "$lib/tex";
    import Block from "$lib/ui/tex/block/Block.svelte";
    import Inline from "$lib/ui/tex/inline/Inline.svelte";
    import Title from "$lib/ui/tex/inline/Title.svelte";

    let { data }: { data: Section } = $props();
</script>

{#snippet document(x: Section)}
    <div id="document">
        <Title title={x.title} section_depth={x.depth} />
        <div class="all-sections-container">
            {#if x.show_sections && x.depth === 0}
                {#each x.sections.value as y}
                    {@render section(y)}
                {/each}
            {:else if x.show_content}
                {@render content(x.content.value)}
            {/if}
        </div>
    </div>
{/snippet}

{#snippet section(x: Section)}
    <div class="section">
        <Title title={x.title} section_depth={x.depth} />
        {#if x.show_sections && x.depth === 1}
            {#each x.sections.value as y}
                {@render sub_section(y)}
            {/each}
        {:else if x.show_content}
            {@render content(x.content.value)}
        {/if}
    </div>
{/snippet}

{#snippet sub_section(x: Section)}
    <div class="sub_section">
        <Title title={x.title} section_depth={x.depth} />
        {#if x.show_content}
            {@render content(x.content.value)}
        {/if}
    </div>
{/snippet}

{#snippet content(x: (TS_Block | TS_Inline)[])}
    <div class="content">
        {#each x as y}
            {#if y instanceof TS_Block}
                <Block block={y} />
            {:else if y instanceof TS_Inline}
                <Inline inline={y} />
            {/if}
        {/each}
    </div>
{/snippet}

{#if data.show_sections && data.depth === 0 }
    {@render document(data)}
{/if}



<style>
    div#document {
        color: var(--text-neutral);
        width: 900px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    div.section {
        padding-left: 40px;
        padding-right: 40px;
        color: var(--text-neutral);
        padding-bottom: 30px;
    }

    div.sub_section {
        padding-left: 0px;
        padding-right: 0px;
    }

    div.content {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>