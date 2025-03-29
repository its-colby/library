<script lang="ts">
    import { BookChapter } from "$lib/book";
    import TableOfContents from "./TOC.svelte";
    import Chapter from "$lib/front-end/ui/book/chapter/Chapter.svelte";
    import { Menu } from "lucide-svelte";

    let { data }: { data: BookChapter } = $props();
    let show_mobile_toc = $state(false);

</script>

<main>
    <button onclick={() => show_mobile_toc = !show_mobile_toc}>
        <Menu size={24} />
        <span>TOC</span>
    </button>

    <div 
        class="toc-overlay" 
        class:show={show_mobile_toc} 
        onclick={() => show_mobile_toc = false}
        onkeydown={(e) => e.key === 'Escape' && (show_mobile_toc = false)}
        role="button"
        tabindex="0"
    >
        <div class="toc-modal">
            <TableOfContents 
                data={data} 
                link_click={() => show_mobile_toc = false} 
            />
        </div>
    </div>

    <div class="toc-container" class:show-mobile={!show_mobile_toc}>
        <TableOfContents data={data} />
    </div>
    <div class="document-container">
        <Chapter data={data} />
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

    main {
        display: flex;
        gap: 20px;
        padding-left: 30px;
        padding-right: 50px;
        flex-direction: row;
        padding-top: 30px;
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
        width: 900px;
        overflow-y: auto;
        padding-bottom: 100px;

        @include screens.mobile {
            width: 100%;
        }
    }
        
</style>