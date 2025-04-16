<script lang="ts">
    import ColorThemeToggle from '$ui-utils/ColorThemeToggle.svelte';
    import Breadcrumbs from '$header/Breadcrumbs.svelte';
    import { Undo2 } from 'lucide-svelte';

    import { store } from '$store/breadcumb.svelte';

    const website_title = `Colby's Library`;
</script>

<header>
    <nav>
        <div class="left-section">
            {#if store.is_file}
                <a href="/" class="show-undo">
                    <span>{website_title}</span>
                    <Undo2 size={25}/>
                </a>
            {:else}
                <span>{website_title}</span>
            {/if}
        </div>

        <div class="center-section">
            <Breadcrumbs />
        </div>

        <div class="right-section">
            <ColorThemeToggle size={25}/>
        </div>
    </nav>
</header>

<style lang="scss">
    @use '$theme/screens.scss';
    @use '$theme/fonts.scss';

    header {
        background-color: var(--header-background);
        padding: 0.5rem 1.5rem;
        top: 0;
        position: sticky;
        z-index: 100;
    }

    nav {
        height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .left-section, .center-section, .right-section {
        flex: 1;
        display: flex;
        align-items: center;
    }

    .left-section {
        justify-content: flex-start;
    }

    .center-section {
        justify-content: center;
    }

    .right-section {
        justify-content: flex-end;
    }

    span {
        @include fonts.themed-font('130', 'normal');
        color: var(--text-neutral);
    }

    a.show-undo {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    a.show-undo:hover {
        color: var(--text-contrast);
    }
</style>