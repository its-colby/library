<script lang="ts">
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
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        width: 100%;
        padding-top: 30px;
    }
</style>