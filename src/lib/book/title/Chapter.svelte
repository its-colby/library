<script lang="ts">
    import { ChapterTitle } from "$book/title";
    import Prose_UI from "$book/exposition/prose/UI.svelte";
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
    this={
        section_depth === 1 ? 'h2' : 
        section_depth === 2 ? 'h3' : 
        'h4'
    }
    id={title.unique_identifier}
>
    {#if section_depth !== 3}
        <span class="number">
            {title.ordinal.value}
        </span>
    {/if}

    <span class="text">
        <Prose_UI 
            prose={title.prose} 
            style_class="chapter-title"
        />
    </span>

</svelte:element>


<style lang="scss">
    @use '$lib/front-end/theme/fonts';

    h2, h3, h4 {
        scroll-margin-top: 100px;
        color: var(--text-neutral);
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 1rem;
        margin: 0;
    }

    h2 {
        @include fonts.themed-font('170', 'bold');
        padding-top: 5rem;
        padding-bottom: 1rem;
    }

    h3 {
        @include fonts.themed-font('130', 'bold');
        padding-top: 3rem;
        padding-bottom: 1rem;
    }

    h4 {
        @include fonts.themed-font('110', 'bold');
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

</style>
