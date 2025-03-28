<script lang="ts">
    import { Title } from "$lib/tex";
    import PageTitle from "$lib/ui/tex/titles/PageTitle.svelte";
    import SectionTitle from "$lib/ui/tex/titles/SectionTitle.svelte";

    let { 
        title, 
        section_depth,
    }: { 
        title: Title, 
        section_depth: number,
    } = $props();

</script>

{#if section_depth === 0}
    <PageTitle title={title} />
{:else if section_depth === 1 || section_depth === 2}
    <SectionTitle title={title} section_depth={section_depth} />
{:else}
    <span>
        Error loading title
    </span>
{/if}

