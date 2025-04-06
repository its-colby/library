<script lang="ts">
    import { type ExpositionComponent, Prose, Digression, List, Statement } from "$book/exposition";

    import Statement_UI from "$book/exposition/equation/statement/UI.svelte";
    import Prose_UI from "$lib/book/exposition/prose/Main.svelte";
    import Digression_UI from "$lib/book/exposition/digression/Main.svelte";
    import List_UI from "$lib/book/exposition/list/Main.svelte";
    
    let { components }: { components: ExpositionComponent[] } = $props();
</script>


<article>
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
</article>


<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
