<script lang="ts">
    import Expression_UI from "$book/exposition/equation/expression/UI.svelte";
    import Conditions_UI from "$book/exposition/equation/condition/UI.svelte";
    import Theorem_UI from "$book/exposition/equation/theorem/UI.svelte";
    import { Statement } from "$book/exposition/equation/statement";
    import { Expression } from "$book/exposition/equation/expression";
    import { Conditions } from "$book/exposition/equation/condition";
    import { Theorem } from "$book/exposition/equation/theorem";
    
    let { data }: { data: Statement } = $props();
    
</script>

<div>
    {#if data instanceof Expression}
        <Expression_UI 
            expression={data} 
            has_secondaries={false}
        />
    {:else if data instanceof Conditions}
        <Expression_UI 
            expression={data.primary} 
            has_secondaries={true}
        />
        <Conditions_UI items={data.secondaries} />
    {:else if data instanceof Theorem}
        <Theorem_UI 
            theorem={data}
        />
    {/if}
</div>


<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        color: var(--text-brand);
        font-size: 20px;
    }
</style>