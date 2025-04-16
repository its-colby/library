<script lang="ts">
    import { BookTitle, ChapterTitle, Title } from "$book";
    import BookTitle_UI from "$book-ui/title/Book.svelte";
    import ChapterTitle_UI from "$book-ui/title/Chapter.svelte";

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

