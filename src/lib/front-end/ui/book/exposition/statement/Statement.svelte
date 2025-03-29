<script lang="ts">
    import * as T from "$lib/book";
    import Expression from "./Expression.svelte";
    import Conditions from "./Conditions.svelte";
    import Theorem from "./Theorem.svelte";
    
    let { data }: { data: T.Statement } = $props();
    
</script>

<div>
    {#if data instanceof T.Expression}
        <Expression 
            expression={data} 
            has_secondaries={false}
        />
    {:else if data instanceof T.Conditions}
        <Expression 
            expression={data.primary} 
            has_secondaries={true}
        />
        <Conditions items={data.secondaries} />
    {:else if data instanceof T.Theorem}
        <Theorem 
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