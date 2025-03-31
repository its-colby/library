<script lang="ts">
    import * as T from "$lib/book";
    import TOC_Section from "$lib/front-end/ui/book/document/TOC_Section.svelte";
    import Prose from "$lib/front-end/ui/book/exposition/Prose.svelte";

    let {
        chapter,
        section_depth,
        current_section,
        link_click = () => {} 
    }: { 
        chapter: T.BookChapter, 
        section_depth: number,
        current_section: string | null,
        link_click?: () => void 
    } = $props();
</script>

{#snippet link(title: T.ChapterTitle)}
    <a 
        class={`section-title depth-${section_depth}`}
        class:active={current_section === title.unique_identifier}
        href={"#" + title.unique_identifier}
        onclick={link_click}
    >
        {#if section_depth !== 3}
            <span class="number">{title.ordinal.value}</span>
        {/if}
        <span class="section-text">
            <Prose prose={title.prose} style_class="toc-section-title" />
        </span>
    </a>
{/snippet}

<div class={`toc-section depth-${section_depth}`}>
    {#if chapter.title instanceof T.ChapterTitle}
        {@render link(chapter.title)}
    {/if}

    {#if chapter.layout instanceof T.Subchapters && section_depth < 3}
        {#each chapter.layout.subchapters as subchapter}
            {#if section_depth < 2 || current_section?.startsWith(chapter.title?.unique_identifier ?? '')}
                <TOC_Section 
                    chapter={subchapter} 
                    section_depth={section_depth + 1} 
                    link_click={link_click}
                    current_section={current_section}
                />
            {/if}
        {/each}
    {/if}
</div>


<style>
    a {
        text-decoration: none;
        color: var(--text-neutral);
        opacity: 0.5;
        transition: opacity 0.1s ease-in-out;

        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
    }

    a.active {
        opacity: 1;
    }

    a:hover {
        color: var(--text-contrast);
        opacity: 1;
    }

    div.toc-section {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    div.toc-section.depth-2, div.toc-section.depth-3 {
        padding-left: 20px;
    }

    a.depth-1 {
        font-size: 20px;
    }

    a.depth-2 {
        font-size: 18px;
    }

    a.depth-3 {
        font-size: 16px;
    }


    /* span:hover {
        color: var(--text-contrast);
    } */


</style>