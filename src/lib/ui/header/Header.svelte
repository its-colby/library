<script lang="ts">
    import ColorThemeToggle from '$lib/ui/utils/ColorThemeToggle.svelte';
    import { theme } from '$lib/theme';
</script>

<header>
    <nav><a href="/">Colby's Blog</a></nav>
    <ColorThemeToggle size={25}/>
</header>


<style lang="scss">
    @use '$lib/theme/screens.scss';
    @use '$lib/theme/fonts.scss';

    header {
        background-color: var(--header-background);
        padding: 0.5rem 1.5rem;
        top: 0;
        position: sticky;
        z-index: 100;

        height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        // @include screens.mobile {
        //     position: relative;
        // }
    }

    a {
        @extend %kinda-large-font;
        color: var(--text-neutral);
        text-decoration: none;
    }
</style>