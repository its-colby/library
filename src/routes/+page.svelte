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
            <ul>
                {#each folder.published_pages as page}
                    {@render page_link(page)}
                {/each}
            </ul>
        </nav>
    </section>
{/snippet}

{#snippet page_link(page: Webpage)}
    <li>
        <h3>
            <a href={page.url} target="_blank" rel="noopener noreferrer">
                <span>{page.title}</span>
                <ExternalLink size={16} />
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
        width: 100%;
        padding-top: 2rem;
        padding-right: 1.5rem;
        padding-left: 1.5rem;
    }

    section {
        margin: 0 auto;
        text-align: center;

        @include screens.desktop {
            width: 500px;
        }

        @include screens.mobile {
            width: 100%;
        }
    }

    h1 {
        margin: 0;
        color: var(--text-neutral);
        @include fonts.themed-font('130', 'bold');
    }

    nav {
        padding: 0;
        margin: 0;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-top: 1rem;
        text-align: left;
        list-style: none;
        padding-left: 0;
        margin: 0;
    }

    h3 {
        margin: 0;
        @include fonts.themed-font('100', 'normal');
    }

    a {
        text-decoration: none;
        color: var(--text-brand);

        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    a:hover {
        text-decoration: underline;
    }
</style>