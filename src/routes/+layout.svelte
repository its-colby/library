<script lang="ts">
    import { theme } from '$lib/theme';
    import { onMount } from 'svelte';
    import Header from '$lib/ui/header/Header.svelte';
    onMount(() => {
        theme.apply(document.documentElement);
    });

    let { children } = $props();
</script>

<Header />
{@render children()}


<style lang="scss">
    @use '$lib/theme/fonts.scss';

    :global(body, html) {
        margin: 0;
        padding: 0;
        @extend %base-font;
        background-color: var(--main-background);
    }
</style>
