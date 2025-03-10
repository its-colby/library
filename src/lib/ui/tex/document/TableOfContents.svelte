<script lang="ts">
    import { Title, Section } from "$lib/tex";
    import Inline from "$lib/ui/tex/inline/Inline.svelte";
    import { onMount } from 'svelte';
    
    let { data, link_click = () => {} }: { data: Section, link_click?: () => void } = $props();
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

{#snippet section_title(x: Title)}
    <a 
        class="section-title" 
        class:active={current_section === x.href}
        href={"#" + x.href}
        onclick={link_click}
    >
        <span class="number">{x.label.label().value}</span>
        <span class="text">
            <Inline inline={x.inline} 
                --font-size="20px"
                --text-color-hover={"var(--text-contrast)"}
            />
        </span>
    </a>
{/snippet}

{#snippet sub_section_title(x: Title)}
    <a 
        class="sub_section-title" 
        class:active={current_section === x.href}
        href={"#" + x.href}
        onclick={link_click}
    >
        <span class="number">{x.label.label().value}</span>
        <span class="text">
            <Inline inline={x.inline} --font-size="18px"/>
        </span>
    </a>
{/snippet}

{#snippet section(x: Section)}
    <div class="section-container">
        {@render section_title(x.title)}
        {#if x.show_sections && x.depth === 1}
            <div class="sub_sections-container">
                {#each x.sections.value as y}
                    {@render sub_section_title(y.title)}
                {/each}
            </div>
        {/if}
    </div>
{/snippet}

{#if data.show_sections && data.depth === 0 }
    <div id="table_of_contents">
        {#each data.sections.value as x}
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

</style>