<script lang="ts">
    import { Block as TS_Block, Inline as TS_Inline, Note as TS_Note, List as TS_List } from "$lib/tex";
    import Block from "$lib/ui/tex/block/Block.svelte";
    import Inline from "$lib/ui/tex/inline/Inline.svelte";
    import Note from "$lib/ui/tex/inline/Note.svelte";
    import List from "$lib/ui/tex/inline/List.svelte";
    let { data }: { data: (TS_Block | TS_Inline | TS_Note | TS_List)[] } = $props();
</script>

<div>
    {#each data as x}
        {#if x instanceof TS_Block}
            <Block block={x} />
        {:else if x instanceof TS_Inline}
            <Inline 
                inline={x} 
                --font-size={"20px"}
                --font-weight={"400"}
                --line-height={"1.5"}
                --text-color={"var(--text-neutral)"}
                --tex-color={"var(--text-brand)"}
            />
        {:else if x instanceof TS_Note}
            <Note note={x}/>
        {:else if x instanceof TS_List}
            <List list={x}/>
        {:else}
            <span>
                Error loading content
            </span>
        {/if}
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>
