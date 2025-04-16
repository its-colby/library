<script lang="ts">
    import { BookChapter, Subchapters, Exposition, type ExpositionComponent } from "$book";

    import Exposition_UI from "$book-ui/exposition/Main.svelte";
    import Title_UI from "$book-ui/title/Main.svelte";
    import Chapter_UI from "./Main.svelte";

    let { data }: { data: BookChapter } = $props();
</script>



{#snippet introduction(components: ExpositionComponent[])}
    {#if components.length > 0}
        <section role="complementary">
            <Exposition_UI components={components} />
        </section>
    {/if}
{/snippet}



{#snippet subchapters(subchapters: BookChapter[])}
    <section role="main">
        {#each subchapters as subchapter}
            <Chapter_UI data={subchapter} />
        {/each}
    </section>
{/snippet}



{#snippet exposition(components: ExpositionComponent[])}
    <section role="main">
        <Exposition_UI components={components} />
    </section>
{/snippet}



<article>

    <Title_UI title={data.title} section_depth={data.nesting_depth} />

    {#if data.layout instanceof Subchapters}
        {@render introduction(data.layout.introduction)}
        {@render subchapters(data.layout.subchapters)}

    {:else if data.layout instanceof Exposition}
        {@render exposition(data.layout.components)}
    {/if}

</article>



<style>
    article {
        display: flex;
        flex-direction: column;
    }
</style>