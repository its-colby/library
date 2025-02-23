<script lang="ts">
    import { Note as TS_Note, Inline as TS_Inline } from "$lib/tex/inline";
    import Inline from "$lib/ui/tex/inline/Inline.svelte";
    import Accordion from "$lib/ui/utils/Accordion.svelte";
    let { note }: { note: TS_Note } = $props();
</script>

{#snippet details(inlines: TS_Inline[])}
    <div>
        {#each inlines as inline}
            <Inline 
                inline={inline} 
                --font-size={"18px"}
                --font-weight={"400"}
                --line-height={"1.5"}
            />
        {/each}
    </div>
{/snippet}

{#snippet header(hovered: boolean, title: TS_Inline)}
    <h4 class={hovered ? "hovered" : ""}>
        <Inline 
                inline={title} 
                --font-size={"18px"}
                --font-weight={"600"}
                --line-height={"1.5"}

            />
    </h4>
{/snippet}


<aside>
    <Accordion 
        header={header} 
        details={details} 
        header_data={note.title} 
        details_data={note.inlines} 
        --chevron-color={"var(--text-neutral)"}
        --chevron-color-hovered={"var(--text-contrast)"}
    />
</aside>

<style>
    aside {
        display: flex;
        flex-direction: column;
        gap: 10px;

        border-color: var(--text-neutral);
        border-width: 1px;
        border-style: solid;
        border-radius: 10px;

        padding: 10px;
    }

    h4 {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.5;
        color: var(--text-neutral);

        margin: 0;
    }

    h4.hovered {
        color: var(--text-contrast);
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        padding-top: 10px;
        padding-left: 40px;
        padding-right: 40px;
    }
</style>