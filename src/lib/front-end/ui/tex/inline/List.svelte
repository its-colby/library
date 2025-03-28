<script lang="ts">
    import { Inline as TS_Inline, List as TS_List } from "$lib/tex/inline";
    import Inline from "$lib/ui/tex/inline/Inline.svelte";
    let { list }: { list: TS_List } = $props();
</script>

<ul>
    {#each list.elements as element}
    <div>
        <li>
            <Inline 
                inline={element[0]} 
                style_class="list"
            />
        </li>
        {#if element[1]}
        <div class="sublist">
            <svelte:self list={element[1]} />
        </div>
        {/if}
    </div>
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