<script lang="ts">
    import Section from "$lib/Section.svelte";

    let music = [
        {
            title: "Curated Romantic Music",
            url: "music/curated_romantic_music",
        },
    ];

    let computer_science = [
        {
            title: "The Principles of Software Engineering",
            url: "https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming",
        },
    ];

    let mathematics = [
        {
            title: "Algebraic Number Theory",
            url: "mathematics/algebraic_number_theory",
        },
        {
            title: "Abstract Algebra",
            url: "mathematics/abstract_algebra",
        },
        {
            title: "Diophantine Equations",
            url: "mathematics/diophantine_equations",
        },
        {
            title: "Elementary Number Theory",
            url: "mathematics/elementary_number_theory",
        },
    ];
</script>

<main>
    <Section title="Computer Science" items={computer_science} />
    <Section title="Mathematics" items={mathematics} />
    <Section title="Romantic Music" items={music} />
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