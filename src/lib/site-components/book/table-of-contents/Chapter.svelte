<script lang="ts">
    import { Chapter, BundledChapters } from "$book/chapter";
    import { ChapterTitle } from "$book/title";
    import TOC_Chapter_UI from "$book-ui/table-of-contents/Chapter.svelte";
    import Link_UI from "$book-ui/table-of-contents/Link.svelte";

    let {
        chapter,
        section_depth,
        current_section,
        link_click = () => {} 
    }: { 
        chapter: Chapter, 
        section_depth: number,
        current_section: string | null,
        link_click?: () => void 
    } = $props();
</script>

<li class={`toc-section depth-${section_depth}`}>
    {#if chapter.title instanceof ChapterTitle}
        <Link_UI 
            title={chapter.title}
            section_depth={section_depth}
            current_section={current_section}
            link_click={link_click}
        />
    {/if}

    {#if (chapter instanceof BundledChapters) &&
        (
            section_depth < 2 || 
            current_section?.startsWith(chapter.title?.unique_identifier ?? '')
        )
    }
        <ol class={`toc-subsections depth-${section_depth}`}>
            {#each chapter.subchapters as subchapter}
                <TOC_Chapter_UI 
                    chapter={subchapter} 
                    section_depth={section_depth + 1} 
                    link_click={link_click}
                    current_section={current_section}
                />
            {/each}
        </ol>
    {/if}
</li>

<style>
    li.toc-section, ol.toc-subsections {
        display: flex;
        flex-direction: column;
    }

    ol.toc-subsections.depth-0 {
        gap: 2rem;
    }

    li.toc-section.depth-1 {
        gap: 0.5rem;
    }

    ol.toc-subsections.depth-1 {
        gap: 0.5rem;
        padding-left: 1rem;
    }

    ol.toc-subsections.depth-2 {
        padding-top: 0.5rem;
        gap: 0.5rem;
        padding-left: 2rem;
        padding-bottom: 0.5rem;
    }
</style>