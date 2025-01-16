<script lang="ts">
    import { recommendations, type Genre } from "$lib/music";
</script>

<main>
    {#each recommendations as genre}
        {@render display(genre)}
    {/each}
</main>

{#snippet display(genre: Genre)}
    <h1>{genre.title}</h1>
    <ul>
        {#each genre.recommendations as recommendation}
            <li>
                <span class="composer">{recommendation.composer}</span>
                <a href={recommendation.link}>{recommendation.title}</a>
                <span class="rating">{recommendation.grade}</span>
            </li>
        {/each}
    </ul>
{/snippet}

<style>
    main {
        padding-top: 40px;
        padding-left: 50px;
        padding-right: 50px;
    }

    h1 {
        font-size: 24px;
        font-weight: 500;
        color: var(--text-neutral-color);
        margin: 0px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 0px;
        padding-top: 10px;
        padding-bottom: 20px;
    }

    li {
        display: flex;
        flex-direction: row;
        align-items: center;

        font-size: 18px;
        font-weight: 400;
        color: var(--text-neutral-color);
        margin: 0px;
    }

    span.composer {
        width: 150px;
    }

    a {
        width: 200px;
        text-decoration: none;
        color: var(--text-brand-color1);
    }

    a:hover {
        text-decoration: underline;
    }
</style>
