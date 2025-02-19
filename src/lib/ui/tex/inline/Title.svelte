<script lang="ts">
    import { Title } from "$lib/tex";
    import Inline from "./Inline.svelte";
    import katex from 'katex';
    import 'katex/dist/katex.min.css';
    import { onMount } from 'svelte';

    let { 
        title, 
        section_depth,
    }: { 
        title: Title, 
        section_depth: number,
    } = $props();

</script>

{#snippet main_title()}
    <h1>
        <Inline inline={title.inline} --font-size="30px"/>
    </h1>
{/snippet}

{#snippet section_title()}
    <h2 id={title.href}>
        <span class="number">{title.label.label().value}</span>
        <span class="text">
            <Inline inline={title.inline} --font-size="24px"/>
        </span>
    </h2>
{/snippet}

{#snippet sub_section_title()}
    <h3 id={title.href}>
        <span class="number">{title.label.label().value}</span>
        <span class="text">
            <Inline inline={title.inline} --font-size="20px"/>
        </span>
    </h3>
{/snippet}

{#if section_depth === 0}
    {@render main_title()}
{:else if section_depth === 1}
    {@render section_title()}
{:else if section_depth === 2}
    {@render sub_section_title()}
{/if}

<style>
    h1, h2, h3 {
        scroll-margin-top: 100px;
    }

    h1 {
        color: var(--text-neutral);
        font-size: 30px;
        font-weight: 600;
        text-align: center;
    }

    h2, h3 {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    h2 {
        font-size: 24px;
        font-weight: 600;
    }

    h3 {
        font-size: 20px;
        font-weight: 600;
    }

    span.number {
        width: 20px;
    }
</style>
