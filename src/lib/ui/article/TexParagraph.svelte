<script lang="ts">
    import { Paragraph } from "$lib/math/index";
    import katex from 'katex';
    import 'katex/dist/katex.min.css';

    let { paragraph }: { paragraph: Paragraph } = $props();
</script>

{#each paragraph.add_type() as { item, type }}
    {#if type === 'text'}
        <span>
            {item}
        </span>
    {:else}
        <span class="tex">
            {@html katex.renderToString(item, { throwOnError: false })}
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