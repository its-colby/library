<script lang="ts">
    import type { Snippet } from "svelte";
    import { ChevronDown, ChevronUp } from 'lucide-svelte';

    let { header, details }: { header: Snippet<[boolean]>; details: Snippet; } = $props();
    let open: boolean = $state(false);
    let hovered: boolean = $state(false);
    let detailsElement: HTMLDetailsElement;
    
    function toggle(event: Event) { 
        event.preventDefault();
        open = !open;
        if (detailsElement) detailsElement.open = open;
    }
</script>


<details bind:this={detailsElement}>

    <summary 
        onclick={toggle}
        onmouseenter={() => hovered = true}
        onmouseleave={() => hovered = false}
    >
        {@render header(hovered)}
        {#if open}
            <ChevronUp size={24} />
        {:else}
            <ChevronDown size={24} />
        {/if}
    </summary>
    
    <div>{@render details()}</div>

</details>


<style>
    summary {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;

        color: var(--chevron-color);
        
        transition: 0.4s;
    }

    summary:hover {
        color: var(--chevron-color-hovered);
    }

    summary::-webkit-details-marker {
        display: none;
    }

    div {
        margin-top: 15px;
        margin-bottom: 10px;
    }
</style>