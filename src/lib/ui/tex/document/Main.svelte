<script lang="ts">
    import { Section as TS_Section } from "$lib/tex";
    import TableOfContents from "$lib/ui/tex/document/TableOfContents.svelte";
    import Section from "$lib/ui/tex/document/Section.svelte";
    let { data }: { data: TS_Section } = $props();
</script>

<main>
    <div class="toc-container">
        <TableOfContents data={data} />
    </div>
    <div class="document-container">
        <Section data={data} />
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: row;
        gap: 20px;
        padding-left: 30px;
        padding-right: 50px;
        padding-top: 30px;
    }

    div.toc-container {
        flex-shrink: 0;
        width: 450px;
    }

    div.document-container {
        width: 900px;
        overflow-y: auto;
    }
        
</style>