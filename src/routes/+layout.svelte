<script lang="ts">
    import Header from "$lib/header/Header.svelte";
    import { apply_color_theme, UNI_THEMES } from '$lib/theme/color_theme';
    import { onMount } from 'svelte';

    onMount(() => {
        apply_color_theme(document.documentElement, UNI_THEMES.dark);
    });

    let { children } = $props();
</script>

<Header />
{@render children()}