<script lang="ts">
    import { Title } from "$lib/math";
    import Inline from "../inline/Inline.svelte";


    let { text }: { text: Title } = $props();
</script>

<h2>
    <span class="number">{text.label}</span>
    <span class="text">
        <Inline inline={text.inline} --tex-color="var(--text-neutral)" --font-size="24px"/>
    </span>
</h2>

<style>
    h2 {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 24px;
        font-weight: 600;
    }

    span.number {
        width: 20px;
    }
</style>