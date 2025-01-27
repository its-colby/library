<script lang="ts">
    import Tooltip from '$lib/utils/Tooltip.svelte';
    import { Sun, Moon } from 'lucide-svelte';
    import { apply_color_theme, type ColorThemes } from '$lib/theme/color_theme';

    let { size = 40, color_themes } : { size?: number, color_themes: ColorThemes } = $props();

    let current_color_theme: 'light' | 'dark' = $state('dark');

    function toggle_theme(): void {
        current_color_theme = current_color_theme === 'light' ? 'dark' : 'light';
        apply_color_theme(document.documentElement, current_color_theme === 'light' ? color_themes.light : color_themes.dark);
    }
</script>

{#snippet content()}
    <button onclick={toggle_theme} aria-label="Toggle theme">
        {#if current_color_theme === 'light'}
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
        
        color: var(--text-contrast-color);
    }
</style>