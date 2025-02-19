<script lang="ts">
    import { Statement, OneLineStatement, MultiLineStatement } from "$lib/tex";
    import StatementHeader from "./StatementHeader.svelte";
    import SubExpressions from "./SubExpressions.svelte";

    let { data, multiple_statements }: { data: Statement, multiple_statements: boolean } = $props();
</script>

<div>
    {#if data instanceof OneLineStatement}
        <StatementHeader 
            expression={data.expression} 
            multiple_statements={multiple_statements} 
            has_secondaries={false}
        />
    {:else if data instanceof MultiLineStatement}
        <StatementHeader 
            expression={data.primary} 
            multiple_statements={multiple_statements} 
            has_secondaries={true}
        />
        <SubExpressions items={data.secondaries} />
    {/if}
</div>


<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>