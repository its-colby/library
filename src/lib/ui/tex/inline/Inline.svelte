<script lang="ts">
    import { Inline } from "$lib/tex";
    import katex from 'katex';
    import 'katex/dist/katex.min.css';

    let { inline }: { inline: Inline } = $props();
</script>

<div>
    {#each inline.value as item}
        {#if typeof item === 'string'}
            <span class="text">
                {item}
            </span>
        {:else}
            <span class="tex">
                {@html katex.renderToString(item.value, { throwOnError: false })}
            </span>
        {/if}
    {/each}
</div>

<style>
    span {
        font-size: var(--font-size, 18px);
        font-weight: var(--font-weight, 400);
        line-height: var(--line-height, 1.5);
        font-family: var(--font-family, inherit);
    }

    span.text {
        color: var(--text-color, var(--text-neutral));
    }

    span.tex {
        color: var(--tex-color, var(--text-brand));
    }
</style>