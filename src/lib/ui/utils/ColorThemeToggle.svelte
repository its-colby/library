<script lang="ts">
    import Tooltip from '$lib/ui/utils/Tooltip.svelte';
    import { Sun, Moon } from 'lucide-svelte';
    import { theme } from '$lib/theme';

    let { size = 40 } : { size?: number } = $props();
</script>

{#snippet content()}
    <button onclick={() => theme.toggle_and_apply(document.documentElement)} aria-label="Toggle theme">
        {#if theme.is_light}
            <Moon class="icon" size={size}/>
        {:else}
            <Sun class="icon" size={size}/>
        {/if}
    </button>
{/snippet}

<Tooltip text="Toggle theme" {content} position="below"/>

<style>
    button {
        background: none;
        border: none;

        cursor: pointer;
        
        color: var(--text-contrast);
    }
</style>