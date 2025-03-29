<script lang="ts">
    import * as T from "$lib/book";
    import Statement from "$lib/front-end/ui/book/exposition/statement/Statement.svelte";
    import Prose from "$lib/front-end/ui/book/exposition/Prose.svelte";
    import Digression from "$lib/front-end/ui/book/exposition/Digression.svelte";
    import List from "$lib/front-end/ui/book/exposition/List.svelte";
    
    let { components }: { components: T.ExpositionComponent[] } = $props();
</script>

<div>
    {#each components as component}
        {#if component instanceof T.Statement}
            <Statement data={component} />
        {:else if component instanceof T.Prose}
            <Prose 
                prose={component} 
                style_class="content"
            />
        {:else if component instanceof T.Digression}
            <Digression digression={component}/>
        {:else if component instanceof T.List}
            <List list={component}/>
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
