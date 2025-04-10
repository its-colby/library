<script lang="ts">
    import { BookChapter, Subchapters } from "$lib/book";
    import TOC_UI from "$lib/book/table-of-contents/Main.svelte";
    import Chapter_UI from "$lib/book/chapter/Main.svelte";
    import { Menu } from "lucide-svelte";

    let { data }: { data: BookChapter } = $props();
    let show_mobile_toc = $state(false);
</script>

<main>
    <button onclick={() => show_mobile_toc = !show_mobile_toc}>
        <Menu size={24} />
        <span>TOC</span>
    </button>

    {#if data.layout instanceof Subchapters}
        <div 
            class="toc-overlay" 
            class:show={show_mobile_toc} 
            onclick={() => show_mobile_toc = false}
            onkeydown={(e) => e.key === 'Escape' && (show_mobile_toc = false)}
            role="button"
            tabindex="0"
        >
            <div class="toc-modal">
                <TOC_UI 
                    data={data} 
                    link_click={() => show_mobile_toc = false} 
                />
            </div>
        </div>

        <div class="toc-container" class:show-mobile={!show_mobile_toc}>
            <TOC_UI data={data} />
        </div>
    {/if}
    
    <div class="document-container">
        <Chapter_UI data={data} />
    </div>
</main>

<style lang="scss">
    @use '$lib/front-end/theme/screens.scss';
    @use '$lib/front-end/theme/fonts.scss';

    button {
        border: none;
        background: transparent;
        padding: 0;
        margin: 0;
        color: var(--text-contrast);

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        top: 1.25rem;
        z-index: 100;
        @include screens.desktop {
            display: none;
        }
    }

    span {
        @extend %base-font;
    }

    :global(body, html) {
        overflow: hidden;
    }

    main {
        display: flex;
        gap: 20px;
        padding-left: 30px;
        padding-right: 50px;
        flex-direction: row;

        position: fixed; // Change to absolute
        top: 4rem;       // Position below header
        left: 0;
        right: 0;
        bottom: 0; 
        overflow: hidden;
    }

    .toc-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;

        &.show {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .toc-modal {
            background: var(--header-background);
            padding: 20px;
            border-radius: 8px;
            width: 90%;
            max-width: 450px;
            max-height: 80vh;
            overflow-y: auto;
        }
    }

    div.toc-container {
        flex-shrink: 0;

        @include screens.desktop {
            width: 450px;
        }

        @include screens.mobile {
            display: none;
        }
    }

    div.document-container {
        max-width: 46rem;
        margin: 0 auto;
        padding-bottom: 25rem;
        padding-right: 1rem;
        padding-top: 2rem;

        overflow-y: auto;
        box-sizing: border-box;
        height: 100%;
        position: relative;

        scroll-behavior: smooth;

        @include screens.mobile {
            width: 100%;
        }
    }
</style>