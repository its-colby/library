<script lang="ts">
    import ColorThemeToggle from '$lib/front-end/ui/utils/ColorThemeToggle.svelte';
    import { Undo2 } from 'lucide-svelte';
    import { page } from '$app/state';
</script>

<header>
    <nav><a href="/" class:show-undo={page.url.pathname !== '/'}>
        <span>Colby's Library</span>
        {#if page.url.pathname !== '/'}
            <Undo2 size={25}/>
        {/if}
    </a></nav>
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

        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    a.show-undo:hover {
        color: var(--text-contrast);
    }
</style>