<script lang="ts">
    import { staging_document } from "$lib/content/maths/staging";
    import Book_UI from "$lib/book/main-ui/Main.svelte";
</script>

<svelte:head>
    <title>{staging_document.title.prose.to_string()}</title>
</svelte:head>

<Book_UI data={staging_document} />
