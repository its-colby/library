<script lang="ts">
    let { children } = $props();
</script>

<main>
    {@render children()}
</main>

<style>
    main {
        margin: 0 auto;
        color: var(--text-neutral);
        padding-bottom: 100px;
        width: 900px;
    }
</style>