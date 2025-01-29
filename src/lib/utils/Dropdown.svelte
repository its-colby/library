<script lang="ts" generics="Q, T">
    import { fade } from 'svelte/transition';
    import type { Snippet } from 'svelte';


    let { on_click, header, header_data, row, items }: { on_click: (item: T) => void, header: Snippet<[Q]>, header_data: Q, row: Snippet<[T]>, items: T[] } = $props();
    let show_dropdown: boolean = $state(false);
    let timeout_ID: NodeJS.Timeout;

    function handle_mouse_enter() {
        clearTimeout(timeout_ID);
        show_dropdown = true;
    }

    function handle_mouse_leave() {
        timeout_ID = setTimeout(() => {
            show_dropdown = false;
        }, 300);
    }
</script>


<nav
    onmouseenter={handle_mouse_enter}
    onmouseleave={handle_mouse_leave}
>
    <button>
        {@render header(header_data)}
    </button>
    {#if show_dropdown}
        <menu transition:fade={{ duration: 100 }}>
            {#each items as item}
                <menuitem onclick={() => on_click(item)}>
                    {@render row(item)}
                </menuitem>
            {/each}
        </menu>
    {/if}
</nav>

<style>
    nav {
        position: relative;
        display: inline-block;
    }

    button {
        background: none;
        border: none;
    }

    menu {
        position: absolute;
        top: 100%;
        left: 50%;
        z-index: 101;
        transform: translateX(-50%);
        background-color: var(--header-background-color);
        border-radius: 4px;
        padding: 8px;
        margin-top: 8px;
        min-width: 200px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    menuitem {
        cursor: pointer;
    }
</style>
