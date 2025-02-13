<script lang="ts">
    import { theme } from '$lib/common/theme';
    import { onMount } from 'svelte';
    import Header from '$lib/ui/header/Header.svelte';
    onMount(() => {
        theme.apply(document.documentElement);
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
        background-color: var(--main-background);
    }
</style>
