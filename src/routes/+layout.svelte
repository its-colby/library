<script lang="ts">
    import { theme } from '$lib/global/ui/theme/index.svelte';
    import { onMount } from 'svelte';
    import "$theme/global.scss";
    import Header from '$header/Header.svelte';

    
    onMount(() => {
        theme.apply(document.documentElement);
    });

    let { children } = $props();
</script>

<Header />
{@render children()}