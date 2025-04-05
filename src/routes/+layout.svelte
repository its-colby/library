<script lang="ts">
    import { theme } from '$lib/front-end/theme';
    import { onMount } from 'svelte';
    import Header from '$lib/front-end/ui/header/Header.svelte';
    onMount(() => {
        theme.apply(document.documentElement);
    });

    let { children } = $props();
</script>

<Header />
{@render children()}


<style lang="scss">
    @use '$lib/front-end/theme/screens.scss';
    
    :global(body, html) {
        margin: 0;
        padding: 0;
        background-color: var(--main-background);

        font-family: 'Roboto', sans-serif;
        line-height: 1.5;

        @include screens.desktop {
            font-size: 18px;
        }

        @include screens.tablet {
            font-size: 16px;
        }

        @include screens.mobile {
            font-size: 16px;
        }
    }
</style>
