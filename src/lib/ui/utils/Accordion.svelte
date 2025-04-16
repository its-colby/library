<script lang="ts" generics="T, Q">
    import type { Snippet } from "svelte";
    import { ChevronDown, ChevronUp } from 'lucide-svelte';

    let { header, header_data, details, details_data }: { header: Snippet<[boolean, T]>; header_data: T; details: Snippet<[Q]>; details_data: Q; } = $props();
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
        {@render header(hovered, header_data)}
        {#if open}
            <ChevronUp size={24} />
        {:else}
            <ChevronDown size={24} />
        {/if}
    </summary>
    
    <div>{@render details(details_data)}</div>

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
</style>