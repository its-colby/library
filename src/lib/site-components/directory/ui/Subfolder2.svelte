<script lang="ts">
    import Link from "$directory-ui/Link.svelte";
    import Link_List from "$directory-ui/Link_List.svelte";

    import { Folder } from "$directory";

    let { folder }: { folder: Folder } = $props();

    const webpages = $derived(
        [...folder.published_files, ...folder.published_folders]
    );
</script>

<section>
    <h2>
        <Link webpage={folder} />
    </h2>
    <Link_List webpages={webpages} />
</section>

<style lang="scss">
    @use '$theme/fonts';

    h2 {
        margin: 0;
        color: var(--text-neutral);
        @include fonts.themed-font('110', 'bold');
    }

    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>