<script lang="ts">
    import { List } from "$book/exposition/list";
    import { Prose } from "$book/exposition/prose";
    import Prose_UI from "$lib/book/exposition/prose/Main.svelte";
    import List_UI from "./Main.svelte";

    let { 
        list, 
        prose_style_class = "list" 
    }: { 
        list: List, 
        prose_style_class?: "list" | "note" 
    } = $props();
</script>

<ul class={list.style}>
    {#each list.elements as element, index}
        {#if element instanceof Prose}
            <li data-index={index + 1}>
                <Prose_UI 
                    prose={element} 
                    style_class={prose_style_class}
                />
            </li>
        {:else if element instanceof List}
            <div class="sublist">
                <List_UI list={element} />
            </div>
        {/if}
    {/each}
</ul>

<style>

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-left: 0.5em;
        margin: 0;
    }

    .sublist {
        padding-left: 1.5em;
    }

    li {
        position: relative;
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    li::before {
        color: var(--text-neutral);
    }

    .bullet li::before {
        content: "•";
        font-size: 1.5em;
        margin-top: -0.1em;
    }

    /* Number style */
    .number li::before {
        content: attr(data-index) ".";
        font-size: 1em;
        margin-top: 0;
    }

</style>