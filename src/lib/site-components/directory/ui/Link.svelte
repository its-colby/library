<script lang="ts">
    import { FolderOpen, ExternalLink } from "lucide-svelte";

    import { Folder, type Webpage } from "$directory";

    let { webpage }: { webpage: Webpage } = $props();
</script>

<a href={webpage.url}>
    <span>{webpage.title}</span>
    <span class="icon">
        {#if webpage instanceof Folder}
            <FolderOpen />
        {:else}
            <ExternalLink />
        {/if}
    </span>
</a>

<style>
    a {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.5rem;

        text-decoration: none;

        color: inherit;
        font-size: inherit;
    }

    a:hover {
        text-decoration: underline;
    }

    .icon {
        transform: translateY(0.1em);
    }
</style>
