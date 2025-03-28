<script lang="ts">
    import { Inline } from "$lib/tex";
    import katex from 'katex';
    import 'katex/dist/katex.min.css';

    let { 
        inline, 
        style_class
    }: { 
        inline: Inline, 
        style_class: "text-statement" | "content" | "note" | "list"
    } = $props();
</script>

<div>
    {#each inline.value as item}
        {#if typeof item === 'string'}
            <span class={`text ${style_class}`}>
                {item}
            </span>
        {:else}
            <span class={`tex ${style_class}`}>
                {@html katex.renderToString(item.value, { throwOnError: false })}
            </span>
        {/if}
    {/each}
</div>

<style>
    span.note {
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
        font-family: 'Roboto', sans-serif;
    }

    span.content, span.list {
        font-size: 20px;
        font-weight: 400;
        line-height: 1.5;
        font-family: 'Roboto', sans-serif;
    }

    .div {
        /* display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px; */
        /* display: flex;
        flex-wrap: wrap; */
    }

    span.tex {
        font-size: 18px;
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
        font-size: 20px;
        font-weight: 500;
        line-height: 1.5;
        font-family: 'Roboto', sans-serif;
    }

    span.text-statement.text {
        color: var(--text-brand);
    }
</style>