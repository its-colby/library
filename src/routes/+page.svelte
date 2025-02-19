<script lang="ts">
    import { Folder, Page, folders } from "$lib/articles";
</script>

<main>
    {#each folders as folder}
        {@render Section(folder)}
    {/each}
</main>

{#snippet Section(folder: Folder)}
    <section>
        <h1>{folder.title}</h1>
        <ul>
            {#each folder.pages as page}
                {@render page_link(page)}
            {/each}
        </ul>
    </section>
{/snippet}

{#snippet page_link(page: Page)}
    <li>
        <h3><a href={page.url}>{page.title}</a></h3>
    </li>
{/snippet}

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        width: 100%;
        padding-top: 30px;
    }

    section {
        width: 500px;
        margin: 0 auto;
        text-align: center;
    }

    h1 {
        font-size: 24px;
        font-weight: 500;
        margin: 0;
        color: var(--text-neutral);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 10px;
        text-align: left;
        list-style: none;
        padding-left: 0;
    }

    h3 {
        margin: 0;
        font-size: 20px;
        font-weight: 400;
    }

    h3 a {
        text-decoration: none;
        color: var(--text-brand);
    }

    h3 a:hover {
        text-decoration: underline;
    }
</style>