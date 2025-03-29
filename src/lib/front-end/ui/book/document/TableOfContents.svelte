<script lang="ts">
    import * as T from "$lib/book";
    import Prose from "$lib/front-end/ui/book/exposition/Prose.svelte";
    import { onMount } from 'svelte';
    
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
        document.querySelectorAll('h2, h3').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    });

    // function scrollToSection(id: string) {
    //     const target = document.getElementById(id);
    //     if (target) {
    //         const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    //         const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    //         window.scrollTo({ top: targetPosition - headerHeight - 10, behavior: "smooth" });
    //     }
    // }

</script>

{#snippet section_title(x: T.Title)}
    {#if x instanceof T.ChapterTitle}
        <a 
            class="section-title" 
            class:active={current_section === x.unique_identifier}
            href={"#" + x.unique_identifier}
            onclick={link_click}
        >
            <span class="number">{x.ordinal.value}</span>
            <span class="section-text">
                <Prose prose={x.prose} style_class="toc-section-title" />
            </span>
        </a>
    {:else}
        <span>
            Error loading section title
        </span>
    {/if}
{/snippet}

{#snippet sub_section_title(x: T.Title)}
    {#if x instanceof T.ChapterTitle}
        <a 
            class="sub_section-title" 
            class:active={current_section === x.unique_identifier}
            href={"#" + x.unique_identifier}
            onclick={link_click}
        >
            <span class="number">{x.ordinal.value}</span>
            <span class="subsection-text">
                <Prose prose={x.prose} style_class="toc-section-title" />
            </span>
        </a>
    {:else}
        <span>
            Error loading sub section title
        </span>
    {/if}
{/snippet}

{#snippet section(x: T.BookChapter)}
    <div class="section-container">
        {@render section_title(x.title)}
        {#if x.layout instanceof T.Subchapters && x.nesting_depth === 1}
            <div class="sub_sections-container">
                {#each x.layout.subchapters as subchapter}
                    {@render sub_section_title(subchapter.title)}
                {/each}
            </div>
        {/if}
    </div>
{/snippet}

{#if data.layout instanceof T.Subchapters && data.nesting_depth === 0 }
    <div id="table_of_contents">
        {#each data.layout.subchapters as x}
            {@render section(x)}
        {/each}
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

    a {
        text-decoration: none;
        color: var(--text-neutral);
        opacity: 0.5;
        transition: opacity 0.1s ease-in-out;
    }

    a.active {
        opacity: 1;
    }

    a:hover {
        color: var(--text-contrast);
        opacity: 1;
    }

    div.sub_sections-container {
        padding-left: 20px;
    }

    a.section-title, a.sub_section-title {
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
    }

    a.section-title {
        font-size: 20px;
    }

    a.sub_section-title {
        font-size: 18px;
    }

    span.number {
        font-size: 20px;
    }

    span.section-text {
        font-size: 20px;
    }

    span.subsection-text {
        font-size: 18px;
    }

    span.section-text:hover, span.subsection-text:hover {
        color: var(--text-contrast);
    }

</style>