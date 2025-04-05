<script lang="ts">
    import { type ExpositionComponent, Prose, Digression, List, Statement } from "$book/exposition";
    import Statement_UI from "$book/exposition/equation/statement/UI.svelte";
    import Prose_UI from "$book/exposition/prose/UI.svelte";
    import Digression_UI from "$book/exposition/digression/UI.svelte";
    import List_UI from "$book/exposition/list/UI.svelte";
    
    let { components }: { components: ExpositionComponent[] } = $props();
</script>

<div>
    {#each components as component}
        {#if component instanceof Statement}
            <Statement_UI data={component} />
        {:else if component instanceof Prose}
            <Prose_UI 
                prose={component} 
                style_class="content"
            />
        {:else if component instanceof Digression}
            <Digression_UI digression={component}/>
        {:else if component instanceof List}
            <List_UI list={component}/>
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
        gap: 1rem;
    }
</style>
