<script lang="ts">
    import { FolderOpen, File } from "lucide-svelte";

    import { Folder, type Webpage } from "$directory";

    let { webpage, show_icon = false, icon_size = "1em" }: { webpage: Webpage, show_icon?: boolean, icon_size?: string } = $props();
</script>

<a href={webpage.url}>
    <span>{webpage.title}</span>
    {#if show_icon}
        <span class="icon">
            {#if webpage instanceof Folder}
                <FolderOpen size={icon_size} />
            {:else}
                <File size={icon_size} />
            {/if}
        </span>
    {/if}
</a>

<style>
    a {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.5em;

        text-decoration: none;

        color: inherit;
        font-size: inherit;
    }

    a:hover {
        text-decoration: underline;
        color: var(--text-brand);
    }

    span {
        text-align: left;
    }

    .icon {
        transform: translateY(0.15em);
    }
</style>
