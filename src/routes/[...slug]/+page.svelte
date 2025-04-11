<!-- This file handles both content pages and the 404 route -->
<script lang="ts">
    import type { PageData } from "./$types";
    import Book_UI from "$lib/book/main-ui/Main.svelte";

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>{data.chapter?.title?.prose?.to_string() ?? 'Page Not Found'}</title>
</svelte:head>

{#if data.chapter}
    <Book_UI data={data.chapter} />
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
