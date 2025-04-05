<script lang="ts">
    import * as T from "$lib/book";
    import Accordion from "$lib/front-end/ui/utils/Accordion.svelte";
    import Prose from "./Prose.svelte";
    import List from "./List.svelte";
    import Statement from "./statement/Statement.svelte";

    let { digression }: { digression: T.Digression } = $props();
</script>

{#snippet details(elements: T.DigressionElement[])}
    <div>
        {#each elements as element}
            {#if element instanceof T.Prose}
                <Prose 
                    prose={element} 
                    style_class="note"
                />
            {:else if element instanceof T.List}
                <List 
                    list={element}
                    prose_style_class="note"
                />
            {:else if element instanceof T.Statement}
                <Statement 
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
    @use '$lib/front-end/theme/fonts';

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