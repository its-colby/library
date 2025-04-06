<script lang="ts">
    import { BookTitle, ChapterTitle, Title } from "$book/title";
    import BookTitle_UI from "./Book.svelte";
    import ChapterTitle_UI from "./Chapter.svelte";

    let { 
        title, 
        section_depth,
    }: { 
        title: Title, 
        section_depth: number,
    } = $props();

</script>

{#if title instanceof BookTitle}
    <BookTitle_UI title={title} />
{:else if title instanceof ChapterTitle}
    <ChapterTitle_UI title={title} section_depth={section_depth} />
{:else}
    <span>
        Error loading title
    </span>
{/if}

