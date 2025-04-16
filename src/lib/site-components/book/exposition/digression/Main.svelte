<script lang="ts">
    import Accordion from "$ui-utils/Accordion.svelte";
    import Prose_UI from "$book-ui/exposition/prose/Main.svelte";
    import List_UI from "$book-ui/exposition/list/Main.svelte";
    import Statement_UI from "$book-ui/exposition/equation/statement/UI.svelte";
    import { Digression, type DigressionElement, Prose, List, Statement } from "$book";



    let { digression }: { digression: Digression } = $props();
</script>

{#snippet details(elements: DigressionElement[])}
    <div>
        {#each elements as element}
            {#if element instanceof Prose}
                <Prose_UI 
                    prose={element} 
                    style_class="note"
                />
            {:else if element instanceof List}
                <List_UI 
                    list={element}
                    prose_style_class="note"
                />
            {:else if element instanceof Statement}
                <Statement_UI 
                    data={element}
                />
            {/if}
        {/each}
    </div>
{/snippet}

{#snippet header(hovered: boolean, title: string)}
    <h4 class={hovered ? "hovered" : ""}>
        {title}
    </h4>
{/snippet}


<aside>
    <Accordion 
        header={header} 
        details={details} 
        header_data={digression.title} 
        details_data={digression.elements} 
        --chevron-color={"var(--text-neutral)"}
        --chevron-color-hovered={"var(--text-contrast)"}
    />
</aside>

<style lang="scss">
    @use '$theme/fonts';

    aside {
        border-color: var(--text-neutral);
        border-width: 1px;
        border-style: solid;
        border-radius: 10px;

        padding: 0.5rem;

        width: fit-content;
        transition: width 0.3s ease;
    }

    h4 {
        @include fonts.themed-font('100', 'normal');
        color: var(--text-neutral);

        margin: 0;
        padding-right: 0.5rem;
    }

    h4.hovered {
        color: var(--text-contrast);
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding-top: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
</style>