<script lang="ts">
    let { children } = $props();
</script>

<div>
    {@render children()}
</div>

<style>
    div {
        padding-left: 40px;
        padding-right: 40px;
        color: var(--text-neutral);
        padding-bottom: 30px;
    }
</style>