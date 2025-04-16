<script lang="ts">
    import Link from "$directory-ui/Link.svelte";

    import { type Webpage, Folder } from "$directory";

    let { webpages }: { webpages: Webpage[] } = $props();
</script>

<ul>
    {#each webpages as webpage}
        <li>
            <h3 class={webpage instanceof Folder ? 'folder' : 'file'}>
                <Link webpage={webpage} />
            </h3>
        </li>
    {/each}
</ul>

<style lang="scss">
    @use '$theme/fonts';

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        list-style: none;
        padding: 0;
        margin: 0;
    }

    h3 {
        margin: 0;
        @include fonts.themed-font('100', 'normal');
        text-align: left;
    }

    h3.folder {
        color: var(--text-neutral);
    }

    h3.file {
        color: var(--text-brand);
    }
</style>