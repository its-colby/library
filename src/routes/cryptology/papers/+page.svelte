<script lang="ts">
    import { chapter } from "$lib/content/crypto/papers";
    import Book_UI from "$lib/book/main-ui/Main.svelte";
</script>

<svelte:head>
    <title>{chapter.title.prose.to_string()}</title>
</svelte:head>

<Book_UI data={chapter} />
