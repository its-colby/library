<script lang="ts">
    import { Sun, Moon } from 'lucide-svelte';
    
    import Tooltip from '$ui-utils/Tooltip.svelte';

    import { theme } from '$lib/global/ui/theme/index.svelte';

    let { size = 40 } : { size?: number | string } = $props();

    function toggle_theme() {
        theme.toggle_and_apply(document.documentElement);
    }
</script>

{#snippet content()}
    <button onclick={toggle_theme} aria-label="Toggle theme">
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
        
        color: var(--text-neutral);
    }

    button:hover {
        color: var(--text-brand);
    }
</style>