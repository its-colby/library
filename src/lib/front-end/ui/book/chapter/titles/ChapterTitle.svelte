<script lang="ts">
    import { ChapterTitle } from "$lib/book";
    import Prose from "$lib/front-end/ui/book/exposition/Prose.svelte";
    import 'katex/dist/katex.min.css';

    let { 
        title, 
        section_depth,
    }: { 
        title: ChapterTitle, 
        section_depth: number,
    } = $props();

</script>


<svelte:element 
    this={section_depth === 1 ? 'h2' : 'h3'}
    id={title.unique_identifier}
>
    <span class="number">
        {title.ordinal.value}
    </span>

    <span class="text">
        <Prose 
            prose={title.prose} 
            style_class="chapter-title"
        />
    </span>

</svelte:element>


<style>
    h2, h3 {
        scroll-margin-top: 100px;

        font-weight: 600;
        color: var(--text-neutral);

        display: flex;
        align-items: center;
        gap: 20px;

        margin: 0px;
    }

    h2 {
        font-size: 30px;
    }

    h3 {
        font-size: 24px;
    }

</style>
