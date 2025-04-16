<script lang="ts">
    import Link_List from "$directory-ui/Link_List.svelte";
    import Subfolder from "$directory-ui/Subfolder.svelte";

    import { Folder } from "$directory";

    let { folder }: { folder: Folder } = $props();
</script>

<main>
    <Link_List webpages={folder.published_files} />
    <ul>
        {#each folder.published_folders as subfolder}
            <li>
                <Subfolder folder={subfolder} />
            </li>
        {/each}
    </ul>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        width: 100vw;
        min-height: 100vh;
        box-sizing: border-box;
        padding-top: 2rem;
        padding-right: 1.5rem;
        padding-left: 1.5rem;
        padding-bottom: 10rem;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }
</style>