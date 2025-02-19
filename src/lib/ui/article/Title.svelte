<script lang="ts">
    let { text }: { text: string } = $props();
</script>

<h1>{text}</h1>

<style>
    h1 {
        color: var(--text-neutral);
        text-align: center;
        font-size: 30px;
        font-weight: 600;
    }
</style>
