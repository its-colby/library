<!-- This file handles both content pages and the 404 route -->
<script lang="ts">
    import type { PageData } from "./$types";
    import { Folder, File } from "$directory";
    import { BookChapter } from "$book";
    import Book_UI from "$book-ui/main-ui/Main.svelte";
    import Folder_UI from "$directory-ui/Main.svelte";

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>{data.webpage?.title ?? 'Page Not Found'}</title>
</svelte:head>

{#if data.webpage instanceof File && data.webpage.content instanceof BookChapter}
    <Book_UI data={data.webpage.content} />
{:else if data.webpage instanceof Folder}
    <Folder_UI folder={data.webpage} />
{:else}
    <div class="error-container">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
    </div>
{/if}

<style>
    .error-container {
        padding: 2rem;
        text-align: center;
    }
</style>
