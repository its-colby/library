<script lang="ts">
    import { DocumentTitle } from "$lib/book";
    import Prose from "$lib/front-end/ui/book/exposition/Prose.svelte";

    let { title }: { title: DocumentTitle } = $props();

</script>

<h1>
    <Prose 
        prose={title.prose} 
        style_class="document-title"
    />
</h1>

<style>
    h1 {
        text-align: center;
        margin: 0px;
        font-size: 30px;
        font-weight: 600;
        color: var(--text-neutral);
    }
</style>
