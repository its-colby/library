<script lang="ts">
    import Subfolder2 from "$directory-ui/Subfolder2.svelte";
    import Link from "$directory-ui/Link.svelte";
    import Link_List from "$directory-ui/Link_List.svelte";

    import { Folder } from "$directory";

    let { folder }: { folder: Folder } = $props();
</script>

<section>
    <h1>
        <Link webpage={folder} />
    </h1>

    <Link_List webpages={folder.published_files} />

    <ul>
        {#each folder.published_folders as subfolder}
            <li>
                <Subfolder2 folder={subfolder} />
            </li>
        {/each}
    </ul>
</section>

<style lang="scss">
    @use '$theme/screens.scss';
    @use '$theme/fonts.scss';

    h1 {
        margin: 0;
        color: var(--text-neutral);
        @include fonts.themed-font('130', 'bold');
    }

    section {
        margin: 0 auto;
        text-align: center;

        @include screens.desktop {
            width: 46rem;
        }

        @include screens.mobile {
            width: 100%;
        }

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
        width: 100%;

        list-style: none;
        padding: 0;
        margin: 0;

        @include screens.mobile {
            grid-template-columns: 1fr;
        }
    }
</style>