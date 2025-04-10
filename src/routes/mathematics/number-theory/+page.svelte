<script lang="ts">
    import { number_theory } from "$lib/content/maths/number-theory";
    import Book_UI from "$lib/book/main-ui/Main.svelte";
</script>

<svelte:head>
    <title>{number_theory.title.prose.to_string()}</title>
</svelte:head>

<Book_UI data={number_theory} />
