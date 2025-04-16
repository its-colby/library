<script lang="ts">
    import { root } from "$content";
    import Main from "$directory-ui/Main.svelte";
    import { store } from "$store/breadcumb.svelte";

    store.set([]);
</script>

<svelte:head>
    <title>Colby's Library</title>
</svelte:head>

<Main folder={root} />