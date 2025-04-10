<script lang="ts">
    import type { PageData } from "./$types";
    import Book_UI from "$lib/book/main-ui/Main.svelte";

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>{data.chapter.title.prose.to_string()}</title>
</svelte:head>

<Book_UI data={data.chapter} />
