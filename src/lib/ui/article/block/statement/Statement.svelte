<script lang="ts">
    import { Statement } from "$lib/math/tex";
    import StatementHeader from "./StatementHeader.svelte";
    import SubExpressions from "./SubExpressions.svelte";

    let { data, multiple_statements }: { data: Statement, multiple_statements: boolean } = $props();
</script>


<div>
    <StatementHeader 
        data={data} 
        multiple_statements={multiple_statements} 
    />
    {#if data.has_secondaries}
        <SubExpressions items={data.secondaries.value} />
    {/if}
</div>


<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>