<script lang="ts">
    import { maximal_ideals } from "$lib/content/maths/maximal-ideals";
    import Book_UI from "$lib/book/main-ui/Main.svelte";
</script>

<svelte:head>
    <title>{maximal_ideals.title.prose.to_string()}</title>
</svelte:head>

<Book_UI data={maximal_ideals} />
