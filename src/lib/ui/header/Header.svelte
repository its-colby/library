<script lang="ts">
    import ColorThemeToggle from '$lib/ui/utils/ColorThemeToggle.svelte';
    import { theme } from '$lib/common/theme';
</script>

<header>
    <h2>Colby Anderson</h2>
    <nav><a href="/">Writings</a></nav>
    <ColorThemeToggle size={25}/>
</header>


<style>
    header {
        background-color: var(--header-background);
        padding: 10px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 40px;
        top: 0;
        position: sticky;
        z-index: 100;
    }

    header h2 {
        font-size: 18px;
        font-weight: 500;
        color: var(--text-neutral);
    }

    a {
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;
        color: var(--text-neutral);
    }

    nav {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
</style>