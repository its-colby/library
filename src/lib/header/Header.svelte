<script lang="ts">
    import ColorThemeToggle from '$lib/utils/ColorThemeToggle.svelte';
    import { active_color_themes } from '$lib/theme/active.svelte';
    import Dropdown from '$lib/utils/Dropdown.svelte';
    import { Copy } from 'lucide-svelte';
    import { fade } from 'svelte/transition';
</script>

<header>
    <h2>Colby Anderson</h2>
    <nav><a href="/">Writings</a></nav>
    <ColorThemeToggle size={25} color_themes={active_color_themes}/>
</header>


<style>
    header {
        background-color: var(--header-background-color);
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
        color: var(--text-neutral-color);
    }

    a {
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;
        color: var(--text-neutral-color);
    }

    nav {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
</style>