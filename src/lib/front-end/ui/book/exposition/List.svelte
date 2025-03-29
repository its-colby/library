<script lang="ts">
    import * as T from "$lib/book";
    import Prose from "./Prose.svelte";
    import List from "./List.svelte";

    let { list }: { list: T.List } = $props();
</script>

<ul>
    {#each list.elements as element}
        {#if element instanceof T.Prose}
            <li>
                <Prose 
                    prose={element} 
                style_class="list"
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
    content: "•";
    color: var(--text-neutral);
    font-size: 1.5em;
    margin-top: -0.1em;
}

</style>