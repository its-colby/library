<script lang="ts">
    import { theme } from '$lib/front-end/theme';
    import { onMount } from 'svelte';
    import "$lib/front-end/theme/global.scss";
    import Header from '$lib/front-end/ui/header/Header.svelte';

    
    onMount(() => {
        theme.apply(document.documentElement);
    });

    let { children } = $props();
</script>

<Header />
{@render children()}