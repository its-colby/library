<script lang="ts">
    import { Chapter, BundledChapters, Exposition, type ExpositionComponent } from "$book";
    import { Optional } from "$common";

    import Exposition_UI from "$book-ui/exposition/Main.svelte";
    import Title_UI from "$book-ui/title/Main.svelte";
    import Chapter_UI from "./Main.svelte";

    let { data }: { data: Chapter } = $props();
</script>



{#snippet introduction(components: Optional<ExpositionComponent[]>)}
    {#if components.is_set()}
        <section role="complementary">
            <Exposition_UI components={components.value} />
        </section>
    {/if}
{/snippet}



{#snippet subchapters(subchapters: Chapter[])}
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

    {#if data instanceof BundledChapters}
        {@render introduction(data.introduction)}
        {@render subchapters(data.subchapters)}

    {:else if data instanceof Exposition}
        {@render exposition(data.components)}
    {/if}

</article>



<style>
    article {
        display: flex;
        flex-direction: column;
    }
</style>