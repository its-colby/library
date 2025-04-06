<script lang="ts">
    import * as T from "$lib/book";
    import { onMount } from 'svelte';
    import TOC_Chapter_UI from "$book/table-of-contents/Chapter.svelte";

    let { 
        data, 
        link_click = () => {} 
    }: { 
        data: T.BookChapter, 
        link_click?: () => void 
    } = $props();

    let current_section: string | null = $state(null);

    let tocContainer: HTMLElement | null = $state(null);

    onMount(() => {
        let lastVisibleSection = '';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    lastVisibleSection = entry.target.id;
                    current_section = lastVisibleSection;
                    
                    // Find the active TOC link
                    const activeTocLink = tocContainer?.querySelector(
                        `a[href="#${lastVisibleSection}"]`
                    );
                    
                    if (activeTocLink && tocContainer) {
                        // Modified scroll behavior
                        const linkRect = activeTocLink.getBoundingClientRect();
                        const containerRect = tocContainer.getBoundingClientRect();
                        
                        if (linkRect.top < containerRect.top || linkRect.bottom > containerRect.bottom) {
                            // Use scrollTop instead of scrollIntoView
                            // const scrollOffset = linkRect.top - containerRect.top - (containerRect.height / 2);
                            // tocContainer.scrollTop += scrollOffset;

                            activeTocLink.scrollIntoView({
                                behavior: 'smooth',
                                block: 'nearest'
                            });
                        }
                    }
                } else if (current_section === entry.target.id) {
                    current_section = lastVisibleSection;
                }
            });
        }, {
            rootMargin: '-100px 0px -50% 0px',
            threshold: 0
        });

        // Observe all section titles
        document.querySelectorAll('h2, h3, h4').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    });

</script>

{#if data.layout instanceof T.Subchapters && data.nesting_depth === 0 }
    <div id="table_of_contents" bind:this={tocContainer}>
        <TOC_Chapter_UI 
            chapter={data} 
            section_depth={0} 
            link_click={link_click}
            current_section={current_section}
        />
    </div>
{/if}



<style>
    div#table_of_contents {
        display: flex;
        flex-direction: column;
        padding-bottom: 5rem;
        padding-top: 2rem;

        /* top: 101px; */
        /* position: sticky; */
        /* height: calc(100vh - 151px); */
        overflow-y: auto;
        box-sizing: border-box;
        height: 100%;

        /* scroll-behavior: smooth; */
    }

</style>