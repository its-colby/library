<script lang="ts">
    import * as T from "$lib/book";
    import Prose from "$lib/front-end/ui/book/exposition/Prose.svelte";
    import { onMount } from 'svelte';
    import TOC_Section from "$lib/front-end/ui/book/document/TOC_Section.svelte";

    let { 
        data, 
        link_click = () => {} 
    }: { 
        data: T.BookChapter, 
        link_click?: () => void 
    } = $props();

    let current_section: string | null = $state(null);

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(entry.target.id);
                    current_section = entry.target.id;
                }
            });
        }, {
            rootMargin: '-100px 0px -50% 0px', // Adjust these values to fine-tune when sections are considered "active"
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
    <div id="table_of_contents">
        <TOC_Section 
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
        gap: 10px;

        top: 101px;
        position: sticky;
        height: calc(100vh - 151px);
        /* max-height: 100vh; */
        overflow-y: auto;
    }

</style>