<script lang="ts">
    import { Title } from "$lib/tex";
    import Inline from "$lib/ui/tex/inline/Inline.svelte";

    let { title }: { title: Title } = $props();

</script>

<h1>
    {title.value}
</h1>

<style>
    h1 {
        text-align: center;
        margin: 0px;
        font-size: 30px;
        font-weight: 600;
        color: var(--text-neutral);
    }
</style>
