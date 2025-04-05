<script lang="ts">
    import { BookChapter, Subchapters, Exposition } from "$book/chapter";
    import Exposition_UI from "$book/exposition/UI.svelte";
    import Title_UI from "$book/title/Interface.svelte";
    import Chapter_UI from "./Chapter.svelte";

    let { data }: { data: BookChapter } = $props();
</script>

<div>

    <Title_UI title={data.title} section_depth={data.nesting_depth} />

    {#if data.layout instanceof Subchapters}

        {#if data.layout.introduction.length > 0}
            <Exposition_UI components={data.layout.introduction} />
        {/if}

        {#each data.layout.subchapters as subchapter}
            <Chapter_UI data={subchapter} />
        {/each}

    {:else if data.layout instanceof Exposition}

        <Exposition_UI components={data.layout.components} />

    {/if}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
    }
</style>