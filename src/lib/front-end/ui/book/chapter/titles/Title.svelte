<script lang="ts">
    import * as T from "$lib/book";
    import DocumentTitle from "./DocumentTitle.svelte";
    import ChapterTitle from "./ChapterTitle.svelte";

    let { 
        title, 
        section_depth,
    }: { 
        title: T.Title, 
        section_depth: number,
    } = $props();

</script>

{#if title instanceof T.DocumentTitle}
    <DocumentTitle title={title} />
{:else if title instanceof T.ChapterTitle}
    <ChapterTitle title={title} section_depth={section_depth} />
{:else}
    <span>
        Error loading title
    </span>
{/if}

