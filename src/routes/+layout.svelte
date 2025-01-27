<script lang="ts">
    import { apply_color_theme, UNI_THEMES } from '$lib/theme/color_theme';
    import { onMount } from 'svelte';
    import Header from '$lib/header/Header.svelte';
    onMount(() => {
        apply_color_theme(document.documentElement, UNI_THEMES.dark);
    });

    let { children } = $props();
</script>

<Header />
{@render children()}


<style>
:global(body, html) {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: var(--content-background-color);
    }
</style>
