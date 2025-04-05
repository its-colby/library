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

<style lang="scss">
    @use '$lib/front-end/theme/fonts';

    h1 {
        text-align: center;
        @include fonts.themed-font('170', 'bold');
        color: var(--text-neutral);

        margin: 0;
        padding-bottom: 2rem;
    }
</style>
