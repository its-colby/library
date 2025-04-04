<script lang="ts">
    import * as T from "$lib/book";
    import Prose from "./Prose.svelte";
    import List from "./List.svelte";

    let { list, prose_style_class = "list" }: { list: T.List, prose_style_class?: "list" | "note" } = $props();
</script>

<ul class={list.style}>
    {#each list.elements as element, index}
        {#if element instanceof T.Prose}
            <li data-index={index + 1}>
                <Prose 
                    prose={element} 
                    style_class={prose_style_class}
                />
            </li>
        {:else if element instanceof T.List}
            <div class="sublist">
                <List list={element} />
            </div>
        {/if}
    {/each}
</ul>

<style>

ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    gap: 20px;
}

li::before {
    /* content: "•"; */
    color: var(--text-neutral);
    /* font-size: 1.5em;
    margin-top: -0.1em; */
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