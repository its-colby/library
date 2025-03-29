<script lang="ts">
    import * as T from "$lib/book";
    import Exposition from "./Exposition.svelte";
    import Title from "./titles/Title.svelte";
    import Chapter from "./Chapter.svelte";

    let { data }: { data: T.BookChapter } = $props();
</script>

<div>

    <Title title={data.title} section_depth={data.nesting_depth} />

    {#if data.layout instanceof T.Subchapters}

        {#each data.layout.subchapters as subchapter}
            <Chapter data={subchapter} />
        {/each}

    {:else if data.layout instanceof T.Exposition}

        <Exposition components={data.layout.components} />

    {/if}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>