<script lang="ts">
    import { Folder, Webpage, folders } from "$lib/content";
    import { ExternalLink } from "lucide-svelte";
</script>

<main>
    {#each folders as folder}
        {#if folder.has_published_pages}
            {@render Section(folder)}
        {/if}
    {/each}
</main>

{#snippet Section(folder: Folder)}
    <section>
        <h1>{folder.title}</h1>
        <nav>
            {#if folder.categories.length > 0}
                <div class="categories-grid">
                    {#each folder.categories as category}
                        <div class="category">
                            <h2>{category.title}</h2>
                            <ul class="category-list">
                                {#each category.published_pages as page}
                                    {@render page_link(page)}
                                {/each}
                            </ul>
                        </div>
                    {/each}
                </div>
            {:else}
                <ul class="non-category-list">
                    {#each folder.published_pages as page}
                        {@render page_link(page)}
                    {/each}
                </ul>
            {/if}
        </nav>
    </section>
{/snippet}

{#snippet page_link(page: Webpage)}
    <li>
        <h3>
            <a href={page.url} target="_blank" rel="noopener noreferrer">
                <span>{page.title}</span>
                <span class="external-link"><ExternalLink size={16} /></span>
            </a>
        </h3>
    </li>
{/snippet}

<style lang="scss">
    @use '$lib/front-end/theme/screens.scss';
    @use '$lib/front-end/theme/fonts.scss';

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        width: 100vw;
        min-height: 100vh;
        box-sizing: border-box;
        padding-top: 2rem;
        padding-right: 1.5rem;
        padding-left: 1.5rem;
        padding-bottom: 10rem;
    }

    section {
        margin: 0 auto;
        text-align: center;

        @include screens.desktop {
            width: 46rem;
        }

        @include screens.mobile {
            width: 100%;
        }

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .external-link {
        transform: translateY(0.1em);
    }

    h1 {
        margin: 0;
        color: var(--text-neutral);
        @include fonts.themed-font('130', 'bold');
    }

    h2 {
        margin: 0;
        color: var(--text-neutral);
        @include fonts.themed-font('110', 'bold');
        text-align: left;
    }

    nav {
        padding: 0;
        margin: 0;
    }

    .categories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
        width: 100%;

        @include screens.mobile {
            grid-template-columns: 1fr;
        }
    }

    .category {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        list-style: none;
        padding-left: 0;
        margin: 0;
    }

    ul.non-category-list > li > h3 {
        text-align: center;
    }

    ul.non-category-list > li > h3 > a {
        justify-content: center;
    }

    ul.category-list > li > h3 {
        text-align: left;
    }

    ul.category-list > li > h3 > a {
        justify-content: flex-start;
    }

    h3 {
        margin: 0;
        @include fonts.themed-font('100', 'normal');
    }

    a {
        text-decoration: none;
        color: var(--text-brand);
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
    }

    a:hover {
        text-decoration: underline;
    }
</style>