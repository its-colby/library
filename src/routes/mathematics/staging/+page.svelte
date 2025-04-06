<script lang="ts">
    import { staging_document } from "$lib/content/maths/staging";
    import Book_UI from "$book/main-ui/UI.svelte";
</script>

<svelte:head>
    <title>{staging_document.title.prose.to_string()}</title>
</svelte:head>

<Book_UI data={staging_document} />
