<script lang="ts">
    import { Section } from "$lib/tex";
    import Document from "$lib/ui/tex/document/Document.svelte";
    import TableOfContents from "$lib/ui/tex/document/TableOfContents.svelte";
    
    let { data }: { data: Section } = $props();
</script>

<main>
    <TableOfContents data={data} />
    <Document data={data} />
</main>

<style>
    main {
        display: flex;
        flex-direction: row;
        gap: 20px;
        padding-left: 30px;
        padding-right: 50px;
    }

        
</style>