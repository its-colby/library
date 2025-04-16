<script lang="ts">
    import { BookTitle } from "$book";
    import Prose_UI from "$book-ui/exposition/prose/Main.svelte";

    let { title }: { title: BookTitle } = $props();

</script>

<h1>
    <Prose_UI 
        prose={title.prose} 
        style_class="document-title"
    />
</h1>

<style lang="scss">
    @use '$theme/fonts';

    h1 {
        text-align: center;
        @include fonts.themed-font('170', 'bold');
        color: var(--text-neutral);

        margin: 0;
        padding-bottom: 2rem;
    }
</style>
