<script lang="ts">
    import { BookChapter, Subchapters } from "$book/chapter";
    import { ChapterTitle } from "$book/title";
    import TOC_Chapter_UI from "$book/table-of-contents/Chapter.svelte";
    import Prose_UI from "$book/exposition/prose/UI.svelte";

    let {
        chapter,
        section_depth,
        current_section,
        link_click = () => {} 
    }: { 
        chapter: BookChapter, 
        section_depth: number,
        current_section: string | null,
        link_click?: () => void 
    } = $props();
</script>

{#snippet link(title: ChapterTitle)}
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
            <Prose_UI prose={title.prose} style_class="toc-section-title" />
        </span>
    </a>
{/snippet}

<div class={`toc-section depth-${section_depth}`}>
    {#if chapter.title instanceof ChapterTitle}
        {@render link(chapter.title)}
    {/if}

    {#if (chapter.layout instanceof Subchapters) &&
        (
            section_depth < 2 || 
            current_section?.startsWith(chapter.title?.unique_identifier ?? '')
        )
    }
        <div class={`toc-subsections depth-${section_depth}`}>
            {#each chapter.layout.subchapters as subchapter}
                <TOC_Chapter_UI 
                    chapter={subchapter} 
                    section_depth={section_depth + 1} 
                    link_click={link_click}
                    current_section={current_section}
                />
            {/each}
        </div>
    {/if}
</div>


<style lang="scss">
    @use '$lib/front-end/theme/fonts';

    a {
        text-decoration: none;
        color: var(--text-neutral);
        opacity: 0.5;
        transition: all 0.1s ease-in-out;

        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: flex-start;
    }

    a.active {
        opacity: 1;
    }

    a:hover {
        color: var(--text-contrast);
        opacity: 1;
    }

    a.depth-1 {
        @include fonts.themed-font('110', 'normal');
    }

    a.depth-2 {
        @include fonts.themed-font('100', 'normal');
    }

    a.depth-3 {
        @include fonts.themed-font('90', 'normal');
    }



    div.toc-section, div.toc-subsections {
        display: flex;
        flex-direction: column;
    }

    div.toc-subsections.depth-0 {
        gap: 2rem;
    }

    div.toc-section.depth-1 {
        gap: 0.5rem;
    }

    div.toc-subsections.depth-1 {
        gap: 0.5rem;
        padding-left: 1rem;
    }

    div.toc-subsections.depth-2 {
        padding-top: 0.5rem;
        gap: 0.5rem;
        padding-left: 2rem;
        padding-bottom: 0.5rem;
    }

</style>