<script lang="ts">
    import { FolderOpen, ExternalLink } from "lucide-svelte";

    import { Folder, type Webpage } from "$directory";

    let { webpage, icon_size = "1em" }: { webpage: Webpage, icon_size?: string } = $props();
</script>

<a href={webpage.url}>
    <span>{webpage.title}</span>
    <span class="icon">
        {#if webpage instanceof Folder}
            <FolderOpen size={icon_size} />
        {:else}
            <ExternalLink size={icon_size} />
        {/if}
    </span>
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
    }

    span {
        text-align: left;
    }

    .icon {
        transform: translateY(0.15em);
    }
</style>
