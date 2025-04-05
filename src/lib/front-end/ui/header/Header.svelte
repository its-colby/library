<script lang="ts">
    import ColorThemeToggle from '$lib/front-end/ui/utils/ColorThemeToggle.svelte';
</script>

<header>
    <nav><a href="/">Colby's Blog</a></nav>
    <ColorThemeToggle size={25}/>
</header>


<style lang="scss">
    @use '$lib/front-end/theme/screens.scss';
    @use '$lib/front-end/theme/fonts.scss';

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
    }

    a {
        @include fonts.themed-font('130', 'normal');
        color: var(--text-neutral);
        text-decoration: none;
    }
</style>