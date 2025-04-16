<script lang="ts">
    import Link from "$directory-ui/Link.svelte";

    import { type Webpage, Folder } from "$directory";

    let { webpages, center = true }: { webpages: Webpage[], center?: boolean } = $props();
</script>

<ul class={center ? 'center' : ''}>
    {#each webpages as webpage}
        <li>
            <h3 class={webpage instanceof Folder ? 'folder' : 'file'}>
                <Link webpage={webpage} show_icon={true} />
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

    ul.center {
        align-items: center;
    }

    h3 {
        margin: 0;
        @include fonts.themed-font('100', 'normal');
        text-align: left;
    }

    h3.folder {
        color: var(--text-brand);
    }

    h3.file {
        color: var(--text-brand);
    }
</style>