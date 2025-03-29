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

<style>

    span.text {
        font-size: inherit;
    }

    div.note {
        font-size: 18px;
    }

    div.content, div.list, div.text-statement {
        font-size: 20px;
    }

    span.note {
        font-weight: 400;
        line-height: 1.5;
        font-family: 'Roboto', sans-serif;
    }

    span.content, span.list {
        font-weight: 400;
        line-height: 1.5;
        font-family: 'Roboto', sans-serif;
    }

    span.tex {
        font-size: 0.9em;
        display: inline-block; /* makes eq. break on new line */
        /* width: 100%; */
    }

    span.note.text, span.content.text, span.list.text {
        color: var(--text-neutral);
    }

    span.note.tex, span.text-statement.tex, span.content.tex, span.list.tex {
        color: var(--text-brand);
    }

    span.text-statement {
        font-weight: 500;
        line-height: 1.5;
        font-family: 'Roboto', sans-serif;
    }

    span.text-statement.text {
        color: var(--text-brand);
    }
</style>