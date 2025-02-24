<script lang="ts">
    import { Inline as TS_Inline, List as TS_List } from "$lib/tex/inline";
    import Inline from "$lib/ui/tex/inline/Inline.svelte";
    let { list }: { list: TS_List } = $props();
</script>

<ul>
    {#each list.inlines as inline}
        <li>
            <Inline 
                inline={inline} 
                --font-size={"20px"}
                --font-weight={"400"}
                --line-height={"1.5"}
            />
        </li>
    {/each}
</ul>

<style>

ul {
    list-style-type: none;
    padding-left: 0;
}

li {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 20px;
}


li::before {
    content: "•";
    left: 0.5em;
    color: var(--text-neutral);
    font-size: 1.5em;
}

</style>