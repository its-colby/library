<script lang="ts">
    import { Prose } from "$lib/book";
    import katex from 'katex';
    import 'katex/dist/katex.min.css';

    let { 
        prose, 
        style_class
    }: { 
        prose: Prose, 
        style_class: "text-statement" | "content" | "note" | "list" | "document-title" | "chapter-title" | "toc-section-title" | "toc-sub-section-title"
    } = $props();
</script>

<div class={`${style_class}`}>
    {#each prose.segments as segment}
        {#if typeof segment === 'string'}
            <span class={`text ${style_class}`}>
                {segment}
            </span>
        {:else}
            <span class={`tex ${style_class}`}>
                {@html katex.renderToString(
                    segment.value, { throwOnError: false }
                )}
            </span>
        {/if}
    {/each}
</div>

<style lang="scss">
    @use '$lib/front-end/theme/fonts';

    span.text {
        font-size: inherit;
    }

    div.note {
        @include fonts.themed-font('90', 'normal');
    }

    div.content, div.list, div.text-statement {
        @include fonts.themed-font('100', 'normal');
    }

    span.tex {
        font-size: 0.9em;
        display: inline-block;
    }

    span.note.text, span.content.text, span.list.text {
        color: var(--text-neutral);
    }

    span.note.tex, span.text-statement.tex, span.content.tex, span.list.tex {
        color: var(--text-brand);
    }

    span.text-statement.text {
        color: var(--text-brand);
    }
</style>