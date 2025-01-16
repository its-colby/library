<script lang="ts">
    import Header from "$lib/header/Header.svelte";
    import Section from "$lib/Section.svelte";

    let recommendations = [
        {
            title: "Classical Music",
            url: "recommendations/music",
        },
    ];

    let computer_science = [
        {
            title: "The Principles of Software Engineering",
            url: "https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming",
        },
    ];
</script>

<main>
    <Section title="Computer Science" items={computer_science} />
    <Section title="Recommendations" items={recommendations} />
</main>

<style>
    :global(body, html) {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: var(--content-background-color);
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        width: 100%;
        padding-top: 30px;
    }
</style>