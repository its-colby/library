<script lang="ts">
    import { Inline } from "$lib/math/index";
    import katex from 'katex';
    import 'katex/dist/katex.min.css';

    let { inline }: { inline: Inline } = $props();
</script>

{#each inline.value as item}
    {#if typeof item === 'string'}
        <span>
            {item}
        </span>
    {:else}
        <span class="tex">
            {@html katex.renderToString(item.value, { throwOnError: false })}
        </span>
    {/if}
{/each}

<style>
    span {
        font-size: 18px;
    }

    span.tex {
        color: var(--text-brand);
    }
</style>