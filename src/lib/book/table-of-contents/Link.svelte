<script lang="ts">
    import { ChapterTitle } from "$book/title";
    import Prose_UI from "$lib/book/exposition/prose/Main.svelte";

    let { 
        title, 
        section_depth, 
        current_section, 
        link_click 
    }: { 
        title: ChapterTitle, 
        section_depth: number, 
        current_section: string | null, 
        link_click: () => void 
    } = $props();

</script>


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

</style>