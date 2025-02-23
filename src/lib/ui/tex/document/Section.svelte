<script lang="ts">
    import { Section as TS_Section } from "$lib/tex";
    import Content from "$lib/ui/tex/document/Content.svelte";
    import Title from "$lib/ui/tex/titles/Title.svelte";
    import Section from "$lib/ui/tex/document/Section.svelte";

    let { data }: { data: TS_Section } = $props();
</script>

<div>

    <Title title={data.title} section_depth={data.depth} />

    {#if data.show_sections}

        {#each data.sections.value as y}
            <Section data={y} />
        {/each}

    {:else if data.show_content}

        <Content data={data.content.value} />

    {/if}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>