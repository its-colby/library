<script lang="ts">
    import { Title } from "$lib/tex";
    import Inline from "$lib/ui/tex/inline/Inline.svelte";

    let { title }: { title: Title } = $props();

</script>

<h1>
    <Inline 
        inline={title.inline}
        --font-size={"30px"}
        --font-weight={"600"}
        --text-color={"var(--text-neutral)"}
    />
</h1>

<style>
    h1 {
        text-align: center;
        margin: 0px;
    }
</style>
